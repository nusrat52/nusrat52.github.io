let input = document.querySelector(".input");
let list = document.querySelector(".list");

if (!localStorage.getItem("obj")) {
    localStorage.setItem("obj",JSON.stringify({}))
}
if (!localStorage.getItem("lastId")) {
    localStorage.setItem("lastId",1)
}

function valu(event) {
  if (event.keyCode == 13) {
      let val = event.currentTarget.value;
      val=val.trim(" ")
      if (val != "") {
        
        let lastId=localStorage.getItem("lastId")

          let obj = JSON.parse(localStorage.getItem("obj"))
          obj[lastId] = [1, val]
          localStorage.setItem("obj", JSON.stringify(obj))
          let p = ` <p data-id=${lastId} class="list__comment"><span class="list__trash"><i class="fas fa-times"></i></span><span class="list__check"><i class="fas fa-check d-none"></i></span>${val}</p>`;
          localStorage.setItem("lastId", +lastId+1)

      list.insertAdjacentHTML("afterbegin", p);
    //   list.classList.add("p10");

    }
    input.value = "";
  }
}




let keys = JSON.parse(localStorage.getItem("obj"));
for (let key in keys) {
    let data = keys[key][1]
    let p
        if( keys[key][0]==1){
        p = ` <p data-id=${key} class="list__comment"><span class="list__trash"><i class="fas fa-times"></i></span><span class="list__check"><i class="fas fa-check d-none"></i></span>${data}</p>`;
        } else {
            p = ` <p data-id=${key} class="list__comment line"><span class="list__trash"><i class="fas fa-times"></i></span><span class="list__check"><i class="fas fa-check"></i></span>${data}</p>`;

}


        list.insertAdjacentHTML("afterbegin", p);
    

}
























input.addEventListener("keyup", valu);

document.querySelector(".input__button").addEventListener("click", (event) => {
    let val = input.value;
    val=val.trim(" ")
    if (val != "") {
        let lastId=localStorage.getItem("lastId")


        let obj = JSON.parse(localStorage.getItem("obj"))
        obj[lastId] = [1, val]
        localStorage.setItem("obj", JSON.stringify(obj))

        let p = ` <p data-id=${lastId} class="list__comment"><span class="list__trash"><i class="fas fa-times"></i></span><span class="list__check"><i class="fas fa-check d-none"></i></span>${val}</p>`;
        localStorage.setItem("lastId", +lastId+1)

    list.insertAdjacentHTML("afterbegin", p);
    // list.classList.add("p10");
  }
  input.value = "";
});

list.addEventListener("click", (event) => {

    if (event.target.classList[1] == "fa-times") {
        p=event.target.parentElement.parentElement
        p.classList.add("opacity-0")
        p.addEventListener("transitionend", () => {
            localStorage.removeItem(p.dataset.id)
            p.remove()
        })

        let id = p.dataset.id
        let obj = JSON.parse(localStorage.getItem("obj"))
        delete obj[id]
        localStorage.setItem("obj", JSON.stringify(obj))
    }

    if (event.target.classList[0] == "list__check" || event.target.classList[1]=="fa-check") {
        let targ = event.target
        if(targ.tagName=="SPAN"){
            let check = targ.querySelector(".fa-check")
            if (check.classList[2]) {
                check.classList.remove("d-none")
                check.parentElement.parentElement.classList.add("line")
                let id = check.parentElement.parentElement.dataset.id
                let obj = JSON.parse(localStorage.getItem("obj"))
                obj[id][0] = 0
                
                localStorage.setItem("obj", JSON.stringify(obj) )

            }
            else {
                let id = check.parentElement.parentElement.dataset.id

                check.classList.add("d-none")

                check.parentElement.parentElement.classList.remove("line")


                let obj = JSON.parse(localStorage.getItem("obj"))
                obj[id][0] = 1
                
                localStorage.setItem("obj", JSON.stringify(obj) )

            }

        }
        else {
            let check = targ
            if (check.classList[2]) {
                let id = check.parentElement.parentElement.dataset.id

                check.classList.remove("d-none")
                check.parentElement.parentElement.classList.add("line")

                let obj = JSON.parse(localStorage.getItem("obj"))
                obj[id][0] = 0
                
                localStorage.setItem("obj", JSON.stringify(obj) )

            }
            else {
                let id = check.parentElement.parentElement.dataset.id

                check.classList.add("d-none")
                check.parentElement.parentElement.classList.remove("line")

                let obj = JSON.parse(localStorage.getItem("obj"))
                obj[id][0] = 1
                
                localStorage.setItem("obj", JSON.stringify(obj) )

            }
        }
    }
});


