import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
    activeModalBtn();
});

const exerciseModal = document.getElementById('exerciseModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const exerciseInfo = document.getElementById('information');
let openModalBtn;

async function getData(id) {
    try {
        const modallApi = axios.create({
            baseURL: 'https://energyflow.b.goit.study/api/exercises',
        });
        const responseModall = await modallApi.get(id);
        const modallResponseData = responseModall.data;
        console.log(modallResponseData);
        renderCard(modallResponseData);

    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Error fetching exercise data: ',
            position: 'topRight',
        });
    }
}

export const activeModalBtn = () => {
    openModalBtn = document.querySelectorAll('.workout-btn-container');
    openModalBtn.forEach(item => {
        item.addEventListener('click', (event) =>{
            event.preventDefault();
            let id = event.target.id;
            getData(id);
        });
    });
};

function renderCard(data) {
    const { bodyPart, burnedCalories, description, equipment, gifUrl, name, popularity, rating, target, time } = data;
    const modalHtml = `
        <img src="${gifUrl}" alt="${name}">
        <h2>${name}</h2>
        <p>Rating: ${rating}</p>
        <p>Target: ${target}</p>
        <p>Body Part: ${bodyPart}</p>
        <p>Equipment: ${equipment}</p>
        <p>Popular: ${popularity}</p>
        <p>Burned Calories: ${burnedCalories}</p>
        <p>Description: ${description}</p>`;
    console.log(modalHtml);
    exerciseInfo.innerHTML = modalHtml;
    openModal();
}

// --- Відкриття модалки


export function openModal() {
    exerciseModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeModalBtn.addEventListener('click', closeModal);
    document.addEventListener('mouseup', outsideClick);
    document.addEventListener('keydown', escapeKey);
}

// --- Закриття модалки 

function closeModal() {
    exerciseModal.classList.remove('open');
    closeModalBtn.removeEventListener('click', closeModal);
    document.removeEventListener('mouseup', outsideClick);
    document.removeEventListener('keydown', escapeKey);
    exerciseInfo.innerHTML = '';
    document.body.style.overflow = '';
}

// --- Кліки по бєкдропу та esc

const outsideClick = function (event) {
    const container = document.getElementById('modal');
    if (!container.contains(event.target) && exerciseModal.classList.contains('open')) {
        closeModal();
    }
};

const escapeKey = function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
};
