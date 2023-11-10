const section = document.querySelector('section');
const articles = section.querySelectorAll('article');
const btn = section.querySelector('.btn');
console.log(articles[2]);
console.log(section);
console.log(btn);
//특정 부모 안에 있는 모든 직계 자식을 선택하고 싶은 경우
// 자신 기준 부모, 자식 찾는 것
const childrenEl = section.children;
const parentEl = btn.parentElement;
const grandParentEl = btn.closest('section');
console.log(childrenEl[2]);
console.log(parentEl);
console.log(grandParentEl);
// 자신 기준 형제 찾는 것
const prevEl = btn.previousElementSibling;
const nextEl = btn.nextElementSibling;
const siblings = btn.parentElement.children;
console.log(prevEl);
console.log(nextEl);
console.log(siblings);
