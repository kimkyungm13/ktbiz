var tl = gsap.timeline();
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


$('.tab ul li button').click(function () {
    gsap.to('.cont-wrap .on [class^="con"] .img-list li', { opacity: 0, y: -50, duration: 0 });
    $('.tab ul li button').parent().removeClass('on');
    $(this).parent().toggleClass('on');
    $('.con1 .img-list').removeClass('on');
    var index = $(this).parent().index();
    $('.cont-wrap > li').removeClass('on');
    $('.cont-wrap > li').eq(index).addClass('on');
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