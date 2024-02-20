// Timeline을 생성합니다.
var tl = gsap.timeline();

// 여기에 Timeline에 추가할 애니메이션을 정의합니다.
tl.to([".vs-txt .sp-txt", ".vs-txt h2", ".vs-txt p"], { opacity: 1, stagger: 0.5, duration: 0.5, y: -50, })
    .to([".sc-visual .free-link", '.vis_icon [class^="vis_"]'], { opacity: 1, stagger: 0.1, duration: 0.5, y: -50, })

    .to(['.vs-img svg',], { opacity: 1, duration: 1, y: -50, stagger: 0.2 })

    .to('.vis_icon [class^="vis_"]', {
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 3,
        stagger: 0.1,
        anticipatePin: 1,
    })
ScrollTrigger.create({
    animation: tl,
    trigger: "body",
});
const sect02 = gsap.timeline();
sect02.to('.sc-contents h3', { opacity: 1, y: -50, stagger: 0.5, duration: 1 })
    .to(['.work-group >*', '.cont-wrap .on [class^="con"] .img-list li'], { opacity: 1, y: -50, stagger: 0.2 })

ScrollTrigger.create({
    animation: sect02,
    trigger: ".work-group",
    y: -50,
});

// 다른 애니메이션 등을 추가할 수 있습니다.

//tab에 button클릭시
$('.tab ul li button').click(function () {
    gsap.to('.cont-wrap .on [class^="con"] .img-list li', { opacity: 0, y: -50, duration: 0 });
    //tab button 부모의 클래스안에 on을 지우고
    $('.tab ul li button').parent().removeClass('on');
    //클릭한 button 에 클래스 토글
    $(this).parent().toggleClass('on');
    //
    $('.con1 .img-list').removeClass('on');
    // 버튼의 인덱스를 가져옵니다.
    var index = $(this).parent().index();

    // cont-wrap의 li 중에서 클릭한 버튼의 인덱스에 해당하는 li에 on 클래스를 추가합니다.
    $('.cont-wrap > li').removeClass('on'); // 모든 li의 on 클래스 제거
    $('.cont-wrap > li').eq(index).addClass('on'); // 클릭한 버튼의 인덱스에 해당하는 li에 on 
    gsap.to($('.cont-wrap .on [class^="con"] .img-list li'), { opacity: 1, y: -100, stagger: 0.2 })
})
























// const visual01 = gsap.timeline();
// visual01.to('.vis_icon', { y: 150, opacity: 1 })

// scrollTrigger.create({
//     Animation: visual01,
//     trigger: ".sc-visual",


// })



// $(function () {
//     gsap.to('.sc-visual', {
//         opacity: 1,
//         y: 30,
//         duration: 4
//     }
//     );
//     gsap.to('.vs-txt span', {
//         y: -100,
//         duration: 1
//     })
//     $(document).ready(function () {
//         setTimeout(function () {
//             $('sc-visual').each(function () {
//                 gsap.to(this, {
//                     y: 10,
//                 })
//             })
//             $('.vis_icon').each(function () {
//                 gsap.to(this, {
//                     y: 30, // 위로 50px 이동
//                     duration: 3, // 애니메이션 지속 시간 (초 단위)
//                     repeat: -1, // 무한 반복 (-1은 무한대)
//                     yoyo: true, // 애니메이션 완료 후 역방향으로 재생하여 복귀
//                     ease: "power1.inOut", // 이징 함수

//                 });
//             });
//         }, 1000)

//     });
// })