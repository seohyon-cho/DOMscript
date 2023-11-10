const btns = document.querySelectorAll('li');
console.log(btns);

/*
  자바스크립트의 style 제어
  - 자바스크립트는 HTML, js 파일 외에는 접근 권한이 없음. 
  - style 변경 시 css 파일이 변경되는 것이 아닌, HTML 요소에 인라인 형태로 style을 강제로 꽂아넣어서 스타일을 덮어쓰기 하는 것. 
*/
const box = document.querySelector('.box');

btns[0].addEventListener('click', () => {
	box.style.backgroundColor = 'hotpink';
});
btns[1].addEventListener('click', () => {
	box.style.width = '400px';
});
btns[2].addEventListener('click', () => {
	box.style.marginLeft = '50px';
});

/* 
  자바스크립트로 기존 스타일을 동적으로 덮어쓰는 것이 아닌
  기존의 원래 스타일 값을 css로 가져오는 것은 불가능하다.
  (js는 css에 접근하는 것이 불가능하기 때문임.)

  자바스크립트는 역으로 화면에 출력되고 있는 결과물을 다시 수치적으로 재계산해서 가져옴. (아래 예시 참고)
*/
btns[1].addEventListener('click', () => {
	console.log(getComputedStyle(box).width);
	console.log(getComputedStyle(box).backgroundColor);
});
