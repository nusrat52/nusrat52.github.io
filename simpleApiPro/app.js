let main = document.querySelector(".main");
let currentId;
let modalButton = document.querySelector(".modal__button");
let modalUpdate = document.querySelector(".modal__update");
let message = document.querySelector(".message");
function cardAdder(data) {
  let card = `      <div class="card ${data.gender}">
    <div class="card__item ">
        <p class="card__items">name: <span class="card__info">${data.name}</span></p>
        <p class="card__items">surname: <span class="card__info">${data.surname}</span></p>
        <p class="card__items">gender: <span class="card__info">${data.gender}</span></p>
        <p class="card__items">story: <span class="card__info">${data.story}</span></p>
        <p class="card__items">title: <span class="card__info">${data.title}</span></p>
        <button  class="btn btn-update">update</button>
        <button  class="btn btn-delete">delete</button>
        <p class="d-none">${data._id}</p>

    </div>
  </div>`;
  main.insertAdjacentHTML("beforeend", card);
}

fetch(" https://card-memories.herokuapp.com/memories/cards")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for (let d of data) {
      cardAdder(d);
    }

    document.querySelectorAll(".btn-delete").forEach((element) => {
      let id = element.nextElementSibling.innerHTML;
      let p = element.closest(".card");
      let update = element.previousElementSibling;

      element.addEventListener("click", () => {
        fetch(`https://card-memories.herokuapp.com/memories/cards/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }).then((res) => {
          console.log(res);
          p.remove();
        });
      });
      update.addEventListener("click", () => {
        modal.style.display = "block";
        modalButton.classList.add("d-none");
        modalUpdate.classList.remove("d-none");
        currentId = id;
      });
    });
  });

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
  reset();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    reset();
  }
};

document.querySelector(".modal__button").addEventListener("click", () => {
  let message = document.querySelector(".message");
  let name = document.querySelector("#name").value.trim(" ");
  let surname = document.querySelector("#surname").value.trim(" ");
  let title = document.querySelector("#title").value.trim(" ");
  let story = document.querySelector("#story").value.trim(" ");
  let gender = document.querySelector("#gender").value;
  if (
    name == "" ||
    surname == "" ||
    title == "" ||
    story == "" ||
    gender == ""
  ) {
    message.className = "message red";
    message.innerHTML = "Xanalarin hamisi doldurulmalidir";
  } else {
    let dat = new Date();
    dat = `${dat.getFullYear()}-${
      dat.getMonth() + 1
    }-${dat.getDate()} ${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}`;
    fetch("https://card-memories.herokuapp.com/memories/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        date: dat,
        name: name,
        surname: surname,
        gender: gender,
        title: title,
        story: story,
      }),
    }).then((res) => {
      if (res.ok) {
        console.log(res.json());
        message.className = "message green";
        message.innerHTML = "Melumatlar muveffeqiyyetle yuklendi";
        setTimeout(() => {
          message.className = "message";
          message.innerHTML = "";
          modal.style.display = "none";
          reset();
        }, 2000);
      }
    });
  }
});

function reset() {
  document.querySelector("#name").value = "";
  document.querySelector("#surname").value = "";
  document.querySelector("#title").value = "";
  document.querySelector("#story").value = "";
  message.className = "message";
  message.innerHTML = "";
  modalButton.classList.remove("d-none");
  modalUpdate.classList.add("d-none");
}

document.querySelector(".modal__update").addEventListener("click", () => {
  let message = document.querySelector(".message");
  let name = document.querySelector("#name").value.trim(" ");
  let surname = document.querySelector("#surname").value.trim(" ");
  let title = document.querySelector("#title").value.trim(" ");
  let story = document.querySelector("#story").value.trim(" ");
  let gender = document.querySelector("#gender").value;

  if (
    name == "" ||
    surname == "" ||
    title == "" ||
    story == "" ||
    gender == ""
  ) {
    message.className = "message red";
    message.innerHTML = "Xanalarin hamisi doldurulmalidir";
  } else {
    let dat = new Date();
    dat = `${dat.getFullYear()}-${
      dat.getMonth() + 1
    }-${dat.getDate()} ${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}`;
    fetch(`https://card-memories.herokuapp.com/memories/cards/${currentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        date: dat,
        name: name,
        surname: surname,
        gender: gender,
        title: title,
        story: story,
      }),
    })
      .then((res) => {
        if (res.ok) {
          message.className = "message green";
          message.innerHTML = "Melumatlar muveffeqiyyetle yenilendi";
          setTimeout(() => {
            message.className = "message";
            message.innerHTML = "";
            modal.style.display = "none";
            reset();
          }, 2000);
        }
      })
      .catch((err) => {
        message.className = "message red";
        message.innerHTML = "Serverde problem bas verdi";
      });
  }
});

let dat = new Date();
dat = `${dat.getFullYear()}-${
  dat.getMonth() + 1
}-${dat.getDate()} ${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}`;
console.log(new Date().toISOString());
