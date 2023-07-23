const realTime = document.querySelector(".header__real-time")

let count = 0

const getClock = () => {
    const date = new Date()
    let hour24 = String(date.getHours()).padStart(2, "0")
    let minute = String(date.getMinutes()).padStart(2, "0")
    let second = String(date.getSeconds()).padStart(2, "0")
    let hour12 = parseInt(hour24) > 12 ? `PM ${String(parseInt(hour24)%12).padStart(2, "0")}` : `AM ${hour24}`
    const hour = count % 2 === 0 ? hour24 : hour12
    realTime.textContent = `${hour} : ${minute} : ${second}`
}

const changeClockMode = () => {
    count ++
    getClock()
}

getClock()
setInterval(getClock, 1000)

realTime.addEventListener('click', changeClockMode)