let interestCalculation = document.getElementById('calculate');
let iC = interestCalculation;

iC.addEventListener('click',() => {
    let amount = document.getElementById('amount').value;
    let interest = document.getElementById('interest').value;
    let a = amount;
    let i =interest;

    percent = eval(i / 100);
    answer = eval(a * percent);

    document.getElementById('output').innerHTML = answer
})