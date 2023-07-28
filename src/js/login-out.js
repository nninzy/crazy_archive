const bgImages = [
  "./src/images/bg-image--01.jpg",
  "./src/images/bg-image--02.jpg",
  "./src/images/bg-image--03.jpg",
  "./src/images/bg-image--04.jpg",
  "./src/images/bg-image--05.jpg",
];

const chracters = [
  "./src/images/chracter--01.png",
  "./src/images/chracter--02.png",
  "./src/images/chracter--03.png",
  "./src/images/chracter--04.png",
  "./src/images/chracter--05.png",
  "./src/images/chracter--06.png",
  "./src/images/chracter--07.png",
  "./src/images/chracter--08.png",
  "./src/images/super-chracter--01.png",
  "./src/images/super-chracter--02.png",
  "./src/images/super-chracter--03.png",
];

const login = document.querySelector(".login");
const loginBgImg = document.querySelector(".login-bg-img");
const loginForm = login.querySelector(".login__form");
const loginInput = loginForm.querySelector("input");
const logoutBtn = document.querySelector(".header__logout");
const mainPage = document.querySelector(".after-login");
const userName = document.querySelector(".user-name");
const chracterEls = Array(...document.querySelectorAll(".login__chracter"));
let idx = 0;
const charcterImgEl = document.querySelector(".profile-chracter__img");

const D_NONE = "d-none";
const USERNAME_KEY = "username";
const CHOSEN_CV = "chosen";
const CHRACTER_KEY = "chracter";
let savedUsername = localStorage.getItem(USERNAME_KEY);

const showLogin = function () {
  loginBgImg.src = bgImages[Math.floor(Math.random() * bgImages.length)]
  login.classList.remove(D_NONE);
  mainPage.classList.add(D_NONE);
};
const afterLogin = function () {
  savedUsername = localStorage.getItem(USERNAME_KEY);
  userName.textContent = savedUsername;
  login.classList.add(D_NONE);
  mainPage.classList.remove(D_NONE);
  charcterImgEl.src = localStorage.getItem(CHRACTER_KEY);
};
const checkLogin = function () {
  if (savedUsername === null || savedUsername === "") {
    showLogin();
  } else {
    afterLogin();
  }
};
const onLoginSubmit = function (event) {
  event.preventDefault();
  loginForm.classList.add(D_NONE);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  let charcterSrc = "src/images/chracter--01.png";
  if (idx === 8) {
    charcterSrc = chracters[Math.floor(Math.random() * chracters.length)];
  } else {
    charcterSrc = chracters[idx];
  }
  localStorage.setItem(CHRACTER_KEY, charcterSrc);
  afterLogin();
};

checkLogin();
loginForm.addEventListener("submit", onLoginSubmit);

const onLogout = function () {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(CHRACTER_KEY);
  localStorage.removeItem("bookmarks");
  localStorage.removeItem("toDos");
  window.location.reload();
};
// logout 실행문
logoutBtn.addEventListener("click", onLogout);

// 캐릭터 선택
chracterEls.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < chracterEls.length; i++) {
      chracterEls[i].classList.remove(CHOSEN_CV);
    }
    chracterEls[index].classList.add(CHOSEN_CV);
    idx = index;
  });
});
