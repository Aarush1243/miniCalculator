
var n1, n2
var num1, num2,button1, button2, button3, button4
function setup() {
  createCanvas(400, 400);
  num1 = createInput()
num1.position(5,60);
num2 = createInput()
num2.position(200,60);
button1 = createButton("ADD")
button1.position(10,200);
button1.mousePressed(add)
button2 = createButton("SUBTRACT")
button2.position(100,200);
button2.mousePressed(subtract)
button3 = createButton("MULTIPLY")
button3.position(200,200);
button3.mousePressed(multiply)
button4 = createButton("DIVIDE")
button4.position(300,200);
button4.mousePressed(divide)
}

function draw() {
  background(220);
  n1 = parseInt(num1.value())
  n2 = parseInt(num2.value())
}
function add(){
  console.log(n1 + n2)
}
function subtract(){
  console.log(n1 - n2)
}
function multiply(){
  console.log(n1 * n2)
}
function divide(){
  console.log(n1/n2)
}