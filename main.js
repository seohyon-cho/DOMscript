const btns = document.querySelectorAll('li');
console.log(btns);

/*
  DOM (Document object Model) : Web Api
  : 브라우저가 HTML 태그를 해석해서 렌더링을 할 때, 자바스크립트로 하여금 제어할 수 있도록 객체형태로 만들어주는 API (application programming interface)
*/

console.dir(btns[0]);
/*
이렇게 쓰면 안 됨 (후에 덮어씌워질 수 있음. )
btns[0].onclick = () => {
	console.log('엄청 중요한 작업');
};

btns[0].onclick = () => {
	console.log('실수로 연결한 쓸 데 없는 작업');
}; */

// 이벤트 연결할 때에는 addEventListener 쓰는 것이 바람직.
// 중복 연결할 수 있기 때문에 혹여나 후에 다른 이벤트가 추가되더라도, 기존의 이벤트 내용이 날아가지는 않음.
/* 
btns[0].addEventListener('click', () => {
	console.log('엄청 중요한 작업');
});
btns[0].addEventListener('click', () => {
	console.log('실수로 연결한 쓸 데 없는 작업');
}); 
*/

// 재활용하려고 함수로 한 번 더 묶는 건 맞는데,
// 함수로 재활용하려면 return값이 나와야 하는데
// 어차피 forEach 자체가 return 값을 주지 않는 특성이므로
// 한 번 더 묶어줄 필요가 없음.
// 그리고 내가 쓴 것처럼 btns[index]. 나 선생님이 쓰신 btn. 이나 똑같음 둘 다 가능함.
const cycle = btns.forEach((data, index) => {
	btns[index].addEventListener('click', () => {
		console.log(`button${index + 1}`);
	});
});

// 선생님이 알려주신 방식
btns[0].addEventListener('click', () => {
	console.log('button1');
}); // 이 형식이 0, 1, 2 반복되는 거니까

btns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		console.log(`button${index + 1}`);
	});
});
