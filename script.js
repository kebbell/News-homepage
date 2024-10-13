const logo = document.querySelector(".logo");

logo.addEventListener("click", reloadPage);

document.addEventListener("click", reloadPageOnAnyClick);

function reloadPageOnAnyClick(event) {
  if (event.target !== logo) {
    reloadPage();
  }
}

function reloadPage() {
  window.location.reload();
}


const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileMenu = document.querySelector(".navbar__mobile");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

