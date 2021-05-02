

window.onscroll = function () {
  myFunction();
};
navbar = document.getElementById("header");

function myFunction() {
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset >= 1117 && window.pageYOffset < 1800) {
    document.querySelector(".nav:nth-child(2)").classList.add("black");
  } else {
    document.querySelector(".nav:nth-child(2)").classList.remove("black");
  }
  if (window.pageYOffset > 1800 && window.pageYOffset < 2755) {
    document.querySelector(".nav:nth-child(4)").classList.add("black");
  } else {
    document.querySelector(".nav:nth-child(4)").classList.remove("black");
  }

  if (window.pageYOffset > document.querySelector("#ourServices").offsetTop-95 && window.pageYOffset < 4524) {
    document.querySelector(".nav:nth-child(3)").classList.add("black");
  } else {
    document.querySelector(".nav:nth-child(3)").classList.remove("black");
  }


  if (window.pageYOffset > document.querySelector("#ontactt").offsetTop-5 ) {
    document.querySelector(".nav:nth-child(6)").classList.add("black");
  } else {
    document.querySelector(".nav:nth-child(6)").classList.remove("black");
  }
}

document
  .querySelector(".nav:nth-child(2)")
  .addEventListener("click", function () {
    window.scrollTo(0, 1118);
  });

document
  .querySelector(".nav:nth-child(4)")
  .addEventListener("click", function () {
    window.scrollTo(0, 1801);
  });

document
  .querySelector(".nav:nth-child(3)")
  .addEventListener("click", function () {
    window.scrollTo(0, 3611);
  });

forum = document.querySelector(".putple");
p = document.createElement("p");
text = document.createTextNode("Field required");
p.appendChild(text);
p.style.margin = "3px";
// forum.querySelector(".after").appendChild(p);

selec = forum.querySelectorAll(".before");
selec2 = forum.querySelectorAll(".after");
selec3 = forum.querySelector(".afterr");



forum.querySelector(".butt7").addEventListener("click", function () {

  if (forum.querySelector("#in").value == "" && selec[0].childNodes.length==3) {
  
    p = document.createElement("p");
    text = document.createTextNode("Field required");
    p.appendChild(text);
    p.style.margin = "3px 0 3px 0";
    p.style.padding = "0px";
    selec[0].insertBefore(p, selec[0].childNodes[0]);
  }

  else if (forum.querySelector("#in").value != "" && selec[0].childNodes.length==4){
    selec[0].removeChild(selec[0].childNodes[0])
  }

  if (forum.querySelector("#in1").value == "" && selec[1].childNodes.length==3) {
  
    p = document.createElement("p");
    text = document.createTextNode("Field required");
    p.appendChild(text);
    p.style.margin = "3px 0 3px 0";
    p.style.padding = "0px";
    selec[1].insertBefore(p, selec[1].childNodes[0]);
  }

  else if (forum.querySelector("#in1").value != "" && selec[1].childNodes.length==4){
    selec[1].removeChild(selec[1].childNodes[0])
  }
  
  if (forum.querySelector("#in2").value == "" && selec2[0].childNodes.length==5) {
  
    p = document.createElement("p");
    text = document.createTextNode("Field required");
    p.appendChild(text);
    p.style.margin = "3px 0 3px 0";
    p.style.padding = "0px";
    selec2[0].appendChild(p);
  }

  else if (forum.querySelector("#in2").value != "" && selec2[0].childNodes.length==6){
    selec2[0].removeChild(selec2[0].childNodes[5])
  }

  console.log(selec3.childNodes.length)
  if (forum.querySelector("#in3").value == "" && selec3.childNodes.length==3) {
  
    p = document.createElement("p");
    text = document.createTextNode("Field required");
    p.appendChild(text);
    p.style.margin = "3px 0 3px 0";
    p.style.padding = "0px";
    selec3.appendChild(p);
  }

  else if (forum.querySelector("#in3").value != "" && selec3.childNodes.length==4){
    selec3.removeChild(selec3.childNodes[3])
  }


});

myFunction()
