let calculate = document.getElementById('cal')
let c = calculate

c.addEventListener('click',() => {
    let age = document.getElementById('age').value
    let days = age*365;
    document.getElementById('days').innerHTML = days;
    
    let hours = age*365*24
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('hours1').innerHTML = ' hrs';

    let minutes = age*365*24*60
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('minutes1').innerHTML = ' min';

    let seconds = age*365*24*60*60
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('seconds1').innerHTML = ' s';

})