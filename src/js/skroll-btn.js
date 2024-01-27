const offset = 100;
const skrollUp = document.querySelector('.skroll-btn');

const getTop = () => window.scrollY || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
    if (getTop() > offset) {
        skrollUp.classList.add('skroll-btn-active');
    } else {
        skrollUp.classList.remove('skroll-btn-active');
    }
})

skrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});