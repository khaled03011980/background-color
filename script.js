function ChangeColor(){
let color = document.getElementById("ColorInputText").value;
let text=document.getElementById("text")
document.body.style.backgroundColor = color;
text.innerText=color;
}