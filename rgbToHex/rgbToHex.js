const r = document.getElementById('red').value
const g = document.getElementById('green').value
const b = document.getElementById('blue').value
const hex = document.getElementById('hex')

const btnConvert = document.getElementById('convert')

btnConvert.addEventListener('click',() => { 
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
      
      hex.innerHTML = rgbToHex
})