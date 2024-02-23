const link =document.querySelector("#a");

//가장 기본적인 이벤트 처리
//선택한 link변수 안의 태그에 Event가 발생하면 함수를 실행
// 요소명.addEventListener("이벤트명", (전달될 값)=>{실행구문})
// 인자 e는 Event객체이다. 보통 안에서도 추가 함수를 쓰기 위해 넣어주는 편
link.addEventListener("click",(e)=>{
	// e.preventDefault => 해당 이벤트 기능을 동작하지 않게하는 것
	// 여기서는 링크로 이동하는 기능을 정지시키는 것이다.
	// 인자로 넣은 click 이벤트가 정지하는 것이 아닌 링크 태그의 url로 이동 기능이 정지된다.
	e.preventDefault
	console.log("눌렀습니다.");
})

const box =document.querySelector("#box")
// mouseenter 인자 => 마우스가 영역에 왔을 때
box.addEventListener("mouseenter", (e)=>{
	box.style.backgroundColor = "pink";
})
// mouseleave 인자 => 마우스가 영역에 왔을 때
box.addEventListener("mouseleave", (e)=>{
	box.style.backgroundColor = "aqua";
})