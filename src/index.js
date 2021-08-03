import "./styles/style.css"
import data from '../data/kline-1628017256904.json'

var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
console.log('Imported data: ', data)

ctx.fillStyle = 'black'
ctx.fillRect(0,  0,  500, 500)