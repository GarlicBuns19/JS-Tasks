let data = ['banana','orange','apple','grape','pear']
document.getElementById('show').innerHTML = data
console.log(data)

data.shift()
console.log(data)
document.getElementById('show0').innerHTML = data

data.unshift('watermelon')
console.log(data)
document.getElementById('show1').innerHTML = data

data.push('sweetmelon')
console.log(data)
document.getElementById('show2').innerHTML = data

data.pop()
console.log(data)
document.getElementById('show3').innerHTML = data

data.splice(1,1)
console.log(data)
document.getElementById('show4').innerHTML = data

data.splice(2,1)
console.log(data)
document.getElementById('show5').innerHTML = data

let arr = data.slice(0,2)
document.getElementById('show6').innerHTML = arr

let arr1 = [1,2,3,4,5,6]
document.getElementById('show7').innerHTML = arr1.indexOf(1)
document.getElementById('show8').innerHTML = arr1.indexOf('1')
document.getElementById('show9').innerHTML = arr1.lastIndexOf(1 )