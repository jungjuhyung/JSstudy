const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
btn1.addEventListener("click", (e)=>{
	document.querySelector("#result").style.backgroundColor = "green";
})
btn2.addEventListener("click", (e)=>{
	document.querySelector("#result").style.backgroundColor = "orange";
})
btn3.addEventListener("click", (e)=>{
	document.querySelector("#result").style.backgroundColor = "purple";
})
const test = document.querySelectorAll("ul")
function changBg(col){
	document.querySelector("#result").style.backgroundColor = col;
}