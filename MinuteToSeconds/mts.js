let minute = document.querySelector('#minute');
let seconds = document.getElementById('seconds');

let calculate = document.getElementById('calculate');
let c = calculate;

c.addEventListener('click',() => {
    let m = minute.value;
    let s = seconds.value;

    answer = eval(m * 60)
    document.getElementById('output').innerHTML = answer;
    answer = eval((m*60)+s)
    document.getElementById('output').innerHTML = answer;
})

