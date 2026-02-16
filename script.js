gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
});

function animarPagina (){
    // ANIMAÇÕES HERO

    gsap.from('.hero', {
        opacity: 0,
        duration: 1.5
    });

    gsap.from('picture:nth-child(2)', {
        y: 60,
        duration: 1
    });

    gsap.from('picture:nth-child(1)', {
        y: -60,
        duration: 1
    });

    // ANIMAÇÕES CARDS

    gsap.from('.card', {
        opacity: 0,
        filter: 'blur(10px)',
        stagger: .3,
        scrollTrigger: {
            trigger: '.cards',
            start: '0% 80%',
            end: '100% 70%',
            scrub: true
        }
    });

    gsap.from('.secaoObrigado ul li', {
        opacity: 0,
        filter: 'blur(10px)',
        x: 40,
        duration: 3,
        stagger: .5, // animar um por vez (aparecer 1 por 1)
        scrollTrigger: { // sincronizar com a rolagem
            trigger: '.secaoObrigado ul', // referência de início
            start: '0% 80%', // onde começa
            end: '100% 50%', // onde termina
            scrub: 2 // deixar suave | não parar de forma seca ao parar a página
        }
    });

    // ANIMAÇÕES FOOTER

    gsap.from('footer', {
        y: '-30%',
        immediateRender: false,
        scrollTrigger: {
            trigger: 'footer',
            // markers: true,
            scrub: true,
            invalidateOnRefresh: true,
            end: '100% 100%' // end scroller-end
        }
    });

    // LETRAS SURGINDO ANIMADAS

    // SELECIONE TODOS OS ELEMENTOS DA SUA PÁGINA QUE TEM A CLASSE .textoSplit

    // ANIME DE FORMA INDEPENDENTE
    const grupoTextoSplit = document.querySelectorAll('.textoSplit');

    // ANIMAR CADA ELEMENTO DESSE AGRUPAMENTO

    grupoTextoSplit.forEach(textoUnicoSplit => {
        const split = SplitText.create(textoUnicoSplit, {
            type: 'lines, words, chars', // qual tipo de divisão (linhas palavras letras)
            mask: 'lines'
        });

        gsap.from(split.chars,{
            y: 40,
            opacity: 0,
            duration: .4,
            stagger: 0.03,
            scrollTrigger: {
                trigger: textoUnicoSplit
            }
        });
    });
}

// PRELOADER -> CRIA TIMELINE

const tl = gsap.timeline({
    onComplete(){
        gsap.to('#preloader', {
            opacity: 0,
            display: 'none'
        });

        animarPagina();
    }
});

tl.to('#preloader path', {
    duration: 3,
    strokeDashoffset: 0
});

tl.to('#preloader path', {
    duration: 0.7,
    fill: 'rgb(168, 19, 19)'
});




