function changeTheme() {
  let body = document.querySelector("body");

  body.classList.toggle("dark");
}

let changeButton = document.querySelector(".changeTheme");
changeButton.addEventListener("click", changeTheme);
