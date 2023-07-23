const bgImages = [
    "../images/bg-image--01.jpg",
    "../images/bg-image--02.jpg",
    "../images/bg-image--03.jpg",
    "../images/bg-image--04.jpg",
    "../images/bg-image--05.jpg",
]

const chracters = [
    "../images/chracter--01.png",
    "../images/chracter--02.png",
    "../images/chracter--03.png",
    "../images/chracter--04.png",
    "../images/chracter--05.png",
    "../images/chracter--06.png",
    "../images/chracter--07.png",
]

const superchracters = [
    "../images/super-chracter--01.png",
    "../images/super-chracter--02.png",
    "../images/super-chracter--03.png",
]

const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = loginForm.querySelector("input")
const logoutBtn = document.querySelector(".header__logout")
const mainPage = document.querySelector(".after-login")
const userName = document.querySelector(".user-name")

const D_NONE = "d-none"
const USERNAME_KEY = "username"
let savedUsername = localStorage.getItem(USERNAME_KEY)

const showLogin = function() {
    login.classList.remove(D_NONE)
    mainPage.classList.add(D_NONE)
}
const afterLogin = function() {
    savedUsername = localStorage.getItem(USERNAME_KEY)
    userName.textContent = savedUsername
    login.classList.add(D_NONE)
    mainPage.classList.remove(D_NONE)
}
const checkLogin = function() {
    if (savedUsername === null || savedUsername === "") {
        showLogin()
    } else {
        afterLogin()
    }
}
const onLoginSubmit = function(event) {
    event.preventDefault()
    loginForm.classList.add(D_NONE)
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    afterLogin()
}

checkLogin()
loginForm.addEventListener("submit", onLoginSubmit)


const onLogout = function() {
    localStorage.removeItem(USERNAME_KEY)
    window.location.reload()
}
// logout 실행문
logoutBtn.addEventListener("click", onLogout)

// 캐릭터 선택
const chracterEls = Array(...document.querySelectorAll(".login__chracter"))