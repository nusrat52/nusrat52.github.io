

    let anaSehife = document.querySelectorAll('[href="#ana"]')
    let nail = document.querySelectorAll('[href="#nail"]')
    let hobbi = document.querySelectorAll('[href="#hobbi"]')
    let contact = document.querySelectorAll('[href="#contact"]')
    console.log(anaSehife);

window.onscroll = () => {


    console.log(window.pageYOffset);
    if (window.pageYOffset >= 0 && window.pageYOffset<787 ) {
        anaSehife[0].classList.add("text-active")
        anaSehife[1].classList.add("text-active")
        nail[0].classList.remove("text-active")
        nail[1].classList.remove("text-active")
        hobbi[0].classList.remove("text-active")
        hobbi[1].classList.remove("text-active")
        contact[0].classList.remove("text-active")
        contact[1].classList.remove("text-active")
     

    }
    else if(window.pageYOffset>=787 && window.pageYOffset<=2750){
        nail[0].classList.add("text-active")
        nail[1].classList.add("text-active")

        anaSehife[0].classList.remove("text-active")
        anaSehife[1].classList.remove("text-active")
        hobbi[0].classList.remove("text-active")
        hobbi[1].classList.remove("text-active")
        contact[0].classList.remove("text-active")
        contact[1].classList.remove("text-active")

    }

    else if(window.pageYOffset>=2750 && window.pageYOffset<2850){
        hobbi[0].classList.add("text-active")
        hobbi[1].classList.add("text-active")
        anaSehife[0].classList.remove("text-active")
        anaSehife[1].classList.remove("text-active")
        nail[0].classList.remove("text-active")
        nail[1].classList.remove("text-active")
        contact[0].classList.remove("text-active")
        contact[1].classList.remove("text-active")

    }
    else if(window.pageYOffset>=2850){
        contact[0].classList.add("text-active")
        contact[1].classList.add("text-active")

        anaSehife[0].classList.remove("text-active")
        anaSehife[1].classList.remove("text-active")

        nail[0].classList.remove("text-active")
        nail[1].classList.remove("text-active")

    }
    
    
    
    
    if (window.pageYOffset >= 35) {
        document.querySelector(".navbar-container").classList.add("navbar-white");
      } else {
        document.querySelector(".navbar-container").classList.remove("navbar-white");

      }




  if (window.pageYOffset >= 222) {
    document.querySelector(".upup").classList.remove("invisible");
    document.querySelector(".upup").classList.add("visiblee");
  } else {
    document.querySelector(".upup").classList.remove("visiblee");
    document.querySelector(".upup").classList.add("invisible");
  }
  if (window.pageYOffset >= 222 && window.pageYOffset <= 1180) {
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

  if (window.pageYOffset >= 722 && window.pageYOffset <= 1680) {
    document.querySelectorAll(".d-none1").forEach((element) => {
      element.classList.add("visible1");
      element.classList.remove("d-none1");
    });
  } else {
    document.querySelectorAll(".visible1").forEach((element) => {
      element.classList.add("d-none1");
      element.classList.remove("visible1");
    });
  }

  if (window.pageYOffset >= 1222 && window.pageYOffset <= 2180) {
    document.querySelectorAll(".d-none2").forEach((element) => {
      element.classList.add("visible2");
      element.classList.remove("d-none2");
    });
  } else {
    document.querySelectorAll(".visible2").forEach((element) => {
      element.classList.add("d-none2");
      element.classList.remove("visible2");
    });
  }

  if (window.pageYOffset >= 1722 && window.pageYOffset <= 2680) {
    document.querySelectorAll(".d-none3").forEach((element) => {
      element.classList.add("visible3");
      element.classList.remove("d-none3");
    });
  } else {
    document.querySelectorAll(".visible3").forEach((element) => {
      element.classList.add("d-none3");
      element.classList.remove("visible3");
    });
  }

  if (window.pageYOffset >= 2222 && window.pageYOffset <= 3180) {
    document.querySelectorAll(".d-none4").forEach((element) => {
      element.classList.add("visible4");
      element.classList.remove("d-none4");
    });
  } else {
    document.querySelectorAll(".visible4").forEach((element) => {
      element.classList.add("d-none4");
      element.classList.remove("visible4");
    });
  }
};
let down = document.querySelector(".down");
down.addEventListener("click", () => {
  let hazirki = window.pageYOffset + 500;
  window.scrollTo(0, hazirki);
});

let up = document.querySelector(".upup");
up.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

setInterval(() => {
    document.querySelector(".updown").classList.add("invisible")
    document.querySelector(".updown").classList.remove("visiblee")
}, 500);
setInterval(() => {
    document.querySelector(".updown").classList.add("visiblee")
    document.querySelector(".updown").classList.remove("invisible")
}, 1000);

console.log(window.screen);

let navAciq=false
function navClicker(){
    let hamburger=document.querySelector(".navbar2__hamburger")
    let nav = document.querySelector(".navbar2")
    

    
    
    if (navAciq == false) {
        hamburger.style.display = "none"
        let width=window.screen.availWidth
        if (window.screen.availWidth > 500) {
            width=500
        }
        console.log(width);
        nav.style.width = width+"px"
        navAciq=true
    }
    else if (navAciq == true) {
        setTimeout(()=>{hamburger.style.display="block"
    },500)

        nav.style.width = "0px"

        navAciq=false
    }

}



document.querySelector(".navbar2__xi").addEventListener("click", navClicker)
document.querySelector(".navbar2__hamburger").addEventListener("click", navClicker)