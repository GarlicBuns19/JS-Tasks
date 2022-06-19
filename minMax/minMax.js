const arr = []
const array = document.getElementById('array')

// Enter into Array
const btnAdd = document.querySelector('#btnAdd')
btnAdd.addEventListener('click' , (x) => {
    x = document.getElementById('inputNum').value ;
    let i = arr.length ;
    arr[i] = x ;
    
    if (i >= 1) {
        array.innerHTML += ', '
    }
    array.innerHTML += arr[i] ;
    i++;
    document.getElementById('arr').value = '';
    document.getElementById('arr').focus()
})
