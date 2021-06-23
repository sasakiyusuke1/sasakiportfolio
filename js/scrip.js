// TOPアニメーション
TweenMax.fromTo('.hero',2, {height:'0%'},{height:'70%',ease: "power2.out"});
TweenMax.fromTo('.hero',4, {width:'100%'},{width:'70%', ease: "power2.out",delay: 2});
TweenMax.fromTo('.overlay',5, {x:'-100%'},{x:'0%', ease: "power2.out",delay: 1});
TweenMax.fromTo('.headA',2, {opacity:'0',y:'-10'},{opacity:'1',y:0, ease: "back.out(1.7)",delay: 4});
// ↓ハンバーガーメニューができたら使う
// TweenMax.fromTo('.nav',2, {opacity:'0',x:'10'},{opacity:'1',x:0, ease: "back.out(1.7)",delay: 4});
TweenMax.staggerFromTo('.letters',2, {x:'1rem',y:'1.2em',rotateZ:180},{x:0,y:0,rotateZ:0, ease: "back.out(1.2)",delay: 2.7});

// ハンバーガー
$(function () {
  $('.Toggle').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $('.NavMenu').addClass('active');
        $('.NavMenu').fadeIn(500);
    } else {
        $('.NavMenu').removeClass('active');
        $('.NavMenu').fadeOut(500);
    }
  });

  $('.navmenu-a').click(function () {
    $('.NavMenu').removeClass('active');
    $('.NavMenu').fadeOut(1000);
    $('.Toggle').removeClass('active');
  });
});

// conBアニメーション
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll",function() {
  for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})
// Aboutアニメーション

const animationTargetElements = document.querySelectorAll(".textAnimation");
for (let i = 0; i < animationTargetElements.length; i++){
  const targetElement = animationTargetElements[i],
        texts = targetElement.textContent, 
        textsArray = [];
  
  targetElement.textContent = "";

  for (let j = 0; j < texts.split("").length; j++){
    const t = texts.split("")[j]; 
    if (t === "") {
        textsArray.push("");
      } else {
        textsArray.push('<span style="animation-delay: ' + (j*0.3) + 's;">' + t + '</span>')
      }
  }

  for (let k = 0; k < textsArray.length; k++){
    targetElement.innerHTML += textsArray[k];
  }
}








