const numbers = document.getElementById('numbers');
const btnaddNum = document.getElementById('addNum');
const numsToCal = document.getElementById('numsToCal');
const arr = [];

btnaddNum.addEventListener('click', () => {
    
    let i = arr.length
    arr[i] = parseInt(numbers.value)

    if(i >= 1){
        numsToCal.innerHTML += ', '
    }

    numsToCal.innerHTML += arr[i]
})

// Calculate Array of Numbers
