const offset = 100;
const skrollUp = document.querySelector('.skroll-btn');
// const skrollUpSVG = document.querySelector('.')
// const pathLength = skrollUpSVG.getTotallLength();





skrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});