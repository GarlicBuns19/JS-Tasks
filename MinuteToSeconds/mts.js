let calculate = document.getElementById('calculate');
let c = calculate;

c.addEventListener('click',() => {
    let minute = document.querySelector('#minute').value;
    // let seconds = document.getElementById('seconds').value;
    let m = minute;
    // let s = seconds;

    answer = eval(m*60)
    document.getElementById('output').innerHTML = answer;
    // answer = eval((m*60)+parseInt(s))
    // document.getElementById('output').innerHTML = answer;
})

