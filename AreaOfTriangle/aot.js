let c = document.getElementById('calculate');

c.addEventListener('click', () => {
    let b = document.getElementById('base').value
    let h = document.getElementById('height').value

    let answer = eval(1/2 * (b*h))

    document.getElementById('answer').innerHTML = answer;
})