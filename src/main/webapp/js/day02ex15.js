const det1 = document.querySelector(".detail");
const detbot = document.querySelector("#open");

function showDetail(){
	det1.style.display = "block";
	detbot.style.display = "none";
}
function hideDetail(){
	det1.style.display = "none";
	detbot.style.display = "block";
}
const plus = document.querySelector("#btnPlus");
const minus = document.querySelector("#btnMius");
plus.addEventListener("click",(e)=>{
/*	let k =document.querySelector("#res").innerHTML;
	k = Number(k);
	document.querySelector("#res").innerHTML = k+1;*/
	document.querySelector("#res").innerHTML++;
	
})
minus.addEventListener("click",(e)=>{
/*	let k =document.querySelector("#res").innerHTML;
	k = Number(k);
	document.querySelector("#res").innerHTML = k-1;*/
	document.querySelector("#res").innerHTML--;
})
