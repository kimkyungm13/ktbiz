$(function () {
    gsap.to('.sc-visual', {
        opacity: 1,
        y: 30,
        duration: 4
    }
    );
    gsap.to('.vs-txt span', {
        y: -100,
        duration: 1
    })
    $(document).ready(function () {
        setTimeout(function () {
            $('sc-visual').each(function () {
                gsap.to(this, {
                    y: 10,
                })
            })
            $('.vis_icon').each(function () {
                gsap.to(this, {
                    y: 30, // 위로 50px 이동
                    duration: 3, // 애니메이션 지속 시간 (초 단위)
                    repeat: -1, // 무한 반복 (-1은 무한대)
                    yoyo: true, // 애니메이션 완료 후 역방향으로 재생하여 복귀
                    ease: "power1.inOut", // 이징 함수

                });
            });
        }, 1000)

    });
})