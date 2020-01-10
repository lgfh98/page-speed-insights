const menu = document.querySelector(".menu");
const burgerMenu = document.querySelector(".burger-menu");
const screenListener = window.matchMedia("screen and (max-width: 767px)");

screenListener.addListener(resizeHandler);

function showMenu() {
  if (menu.classList.contains("is--active")) {
    menu.classList.remove("is--active");
  } else {
    menu.classList.add("is--active");
  }
}

function resizeHandler(event) {
  if (event.matches) {
    burgerMenu.addEventListener("click", showMenu);
    console.log("add");
  } else {
    console.log("remove");
    burgerMenu.removeEventListener("click", showMenu);
  }
}

resizeHandler(screenListener);
