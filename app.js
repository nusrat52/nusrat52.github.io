window.onscroll = () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 222 && window.pageYOffset <= 880) {
    document.querySelectorAll(".d-none").forEach((element) => {
      element.classList.add("visible");
      element.classList.remove("d-none");
    });
  } else {
    document.querySelectorAll(".visible").forEach((element) => {
      element.classList.add("d-none");
      element.classList.remove("visible");
    });
  }
    
    
  if (window.pageYOffset >= 722 && window.pageYOffset<=1380) {
    document.querySelectorAll(".d-none1").forEach(element => {
        element.classList.add("visible1")
        element.classList.remove("d-none1")
    });




}
else {
    document.querySelectorAll(".visible1").forEach(element => {
        element.classList.add("d-none1")
        element.classList.remove("visible1")
    });

  }
    
    
  if (window.pageYOffset >= 1222 && window.pageYOffset<=1880) {
    document.querySelectorAll(".d-none2").forEach(element => {
        element.classList.add("visible2")
        element.classList.remove("d-none2")
    });




}
else {
    document.querySelectorAll(".visible2").forEach(element => {
        element.classList.add("d-none2")
        element.classList.remove("visible2")
    });

  }
    
  if (window.pageYOffset >= 1722 && window.pageYOffset<=2380) {
    document.querySelectorAll(".d-none3").forEach(element => {
        element.classList.add("visible3")
        element.classList.remove("d-none3")
    });




}
else {
    document.querySelectorAll(".visible3").forEach(element => {
        element.classList.add("d-none3")
        element.classList.remove("visible3")
    });

  }
    
  if (window.pageYOffset >= 2222 && window.pageYOffset<=2880) {
    document.querySelectorAll(".d-none4").forEach(element => {
        element.classList.add("visible4")
        element.classList.remove("d-none4")
    });




}
else {
    document.querySelectorAll(".visible4").forEach(element => {
        element.classList.add("d-none4")
        element.classList.remove("visible4")
    });

}
    
};
let down=document.querySelector(".down")
down.addEventListener("click", () => {
    let hazirki=window.pageYOffset+500
    window.scrollTo(0, hazirki);
})

let up=document.querySelector(".upup")
up.addEventListener("click", () => {

    window.scrollTo(0, 0);
})