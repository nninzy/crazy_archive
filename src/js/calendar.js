// 달력 렌더링 코드
let calDate = new Date()

const renderCalendar = () => {
    const viewYear = calDate.getFullYear()
    const viewMonth = calDate.getMonth()
    document.querySelector('.cal-head__this-month').textContent = `${viewYear}년 ${viewMonth + 1}월`

    const prevLast = new Date(viewYear, viewMonth, 0)
    const thisLast = new Date(viewYear, viewMonth + 1, 0)

    const plDate = prevLast.getDate()
    const plDay = prevLast.getDay()

    const tlDate = thisLast.getDate()
    const tlDay = thisLast.getDay()

    const prevDates = []
    const thisDates = [...Array(tlDate + 1).keys()].slice(1)
    const nextDates = []

    if (plDate != 6) {
        for (let i=0; i < plDay + 1; i++) {
            prevDates.unshift(plDate - i)
        }
    }
    for (let i=0; i < 7 - tlDay - 1; i++) {
        nextDates.push(i+1)
    }
    const dates = prevDates.concat(thisDates, nextDates)
    const firstDateIndex = dates.indexOf(1)
    const lastDateIndex = dates.indexOf(tlDate)

    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other'
        dates[i] = `<div class="${condition} date"><span>${date}</span></div>`
    })
    document.querySelector('.dates').innerHTML = dates.join('')

    const today = new Date();

    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if(+date.innerText === today.getDate()) {
                date.classList.add('today')
                break
            }
        }
    }
}

const prevMonth = () => {
    calDate.setMonth(calDate.getMonth() - 1)
    renderCalendar()
}
const nextMonth = () => {
    thisMonth = calDate.getMonth()
    calDate.setMonth(calDate.getMonth() + 1)
    renderCalendar()
}
const goToday = () => {
    calDate = new Date()
    renderCalendar()
}

renderCalendar()

document.querySelector('.go-prev').addEventListener('click', prevMonth)
document.querySelector('.go-next').addEventListener('click', nextMonth)
document.querySelector('.go-today').addEventListener('click', goToday)