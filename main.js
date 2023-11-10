/*
  - document.querySelector('section'); 태그명으로 단수 요소
  - section.querySelectorAll('article'); 태그명으로 복수 개 요소
  - section.children; 모든 직계자식
  - btn.parentElement; 직계부모
  - btn.closest('section') 조상 요소
  - btn.previousElementSiblings; 특정 요소의 이전 형제요소
  - btn.nextElementSiblings; 특정 요소의 다음 형제요소
  - btn.parentElement.children; 모든 형제요소 
      (모든 형제요소를 찾는 공식적인 규칙은 없어서, parentElement를 통해 부모로 한 단계 상위로 올라갔다가 children으로 그 부모의 모든 자식을 구하는 것.)
 */

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
