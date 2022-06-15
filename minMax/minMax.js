let max = document.getElementById('max');
let min = document.getElementById('min');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click',() => {
    let mx = max.value;
    let m = min.value;

    let r = parseInt(mx - m);
    document.getElementById('range').innerHTML = r;
})
