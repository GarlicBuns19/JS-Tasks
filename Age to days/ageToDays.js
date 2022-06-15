let calculate = document.getElementById('cal')
let c = calculate

c.addEventListener('click',() => {
    let age = document.getElementById('age').value
    let days = age*365;
    document.getElementById('days').innerHTML = days;
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('days')
})