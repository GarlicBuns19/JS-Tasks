let max = document.getElementById('max');
let min = document.getElementById('min');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click',() => {
    let mx = max.value;
    let m = min.value;

    let r = parseInt(mx - m);
    document.getElementById('range').innerHTML = r;
})

// let meanNumbers = document.getElementById('meanNumbers');
// let calculateMean = document.getElementById('calculateMean');

// calculateMean.addEventListener('click',() => {
//     let mN = meanNumbers [''];
    
//     const average = arr.reduce((a, b) => a + b, 0) / arr.length;

//     document.getElementById('mean').innerHTML = average;
// })
