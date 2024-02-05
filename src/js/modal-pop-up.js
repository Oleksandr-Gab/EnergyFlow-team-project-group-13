import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconURL from '../img/sprite.svg';


// import { saveExercises } from './favorites/favoritePart';
// document.addEventListener('DOMContentLoaded', () => {
//     activeModalBtn();
// });
const iconHeart = `<svg class="heart" width="32" height="32">
<use href="${iconURL}#heart"></use>
</svg>`

const exerciseModal = document.getElementById('exerciseModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const exerciseInfo = document.getElementById('information');
const addToFavoritesBtn = document.getElementById('addToFavoritesBtn');

let openModalBtn;
let modallResponseData;

const fModaLApi = axios.create({
    baseURL: 'https://energyflow.b.goit.study/api/exercises',
});


async function getData(id) {
    try {
        const responseModall = await fModaLApi.get(id);
        modallResponseData = responseModall.data;
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
            let id = event.currentTarget.id;
            if (!id) return;
            getData(id);
            auditLocal(id)
        });
    });
};

async function renderCard(data) {
    const { bodyPart, burnedCalories, description, equipment, gifUrl, name, popularity, rating, target, time, _id } = data;
    const modalHtml = `
        <div class="gif">
        <img src="${gifUrl}" alt="${name}" >
        </div>

        <div class = "text">

        <h2>${name}</h2>
        
        <div class="rating-container">
            <p>${rating}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${iconURL}#icon-star"></use>
            </svg>
        </div>

        <ul class="info-block">
    <li class="info-item">
        <h3 class="info-text">Target</h3>
        <p class="modal-pop-descr">${target}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Body Part</h3>
        <p class="modal-pop-descr">${bodyPart}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Equipment</h3>
        <p class="modal-pop-descr">${equipment}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Popular</h3>
        <p class="modal-pop-descr">${popularity}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Burned Calories</h3>
        <p class="modal-pop-descr">${burnedCalories}/${time}min</p>
    </li>
</ul>


        <p class="description">Description: ${description}</p> 
        </div>`;
    
    exerciseInfo.insertAdjacentHTML('afterbegin', modalHtml);
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
    addToFavoritesBtn.removeEventListener('click', addToFavorite)
    addToFavoritesBtn.removeEventListener('click', deleteToFavorite);
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

// отримання масива даних для передавання в localStor

const getObj = (data) => {
    const { _id, bodyPart, burnedCalories, description, equipment, gifUrl, name, popularity, rating, target, time } = data;
    return { _id, bodyPart, burnedCalories, description, equipment, gifUrl, name, popularity, rating, target, time };
}

// функція додавання інфи в localStor

const addToFavorite = () => {
    const { _id } = modallResponseData;
    let localFavCart = localStorage.getItem('favoritesCard');
    let newLocalFavCart = [];

    if (localFavCart != null) {
        newLocalFavCart = JSON.parse(localFavCart);
};
    const newObj = getObj(modallResponseData);
    newLocalFavCart.push(newObj);

    localStorage.setItem('favoritesCard', JSON.stringify(newLocalFavCart));
    auditLocal( _id )
};

// функція  видалення інфи в localStor

export const deleteToFavorite = async () => {
    const { _id } = modallResponseData;
    let localFavCart = localStorage.getItem('favoritesCard');
    let newLocalFavCart = JSON.parse(localFavCart).filter(el => el._id != _id);
        if (newLocalFavCart.length != 0) {
            localStorage.setItem('favoritesCard', JSON.stringify(newLocalFavCart));
        } else {
            localStorage.removeItem('favoritesCard');
        };
    auditLocal( _id );
    // await saveExercises();
}

// Функція перевірки localStor

export const auditLocal = (data) => {
    let localFavCart = localStorage.getItem('favoritesCard');

    addToFavoritesBtn.addEventListener('click', addToFavorite);
    addToFavoritesBtn.removeEventListener('click', deleteToFavorite);
    addToFavoritesBtn.innerHTML = `Add to favorites ${iconHeart}`
    
    if (localFavCart != null) {
        JSON.parse(localFavCart).forEach(el => {
            if (el._id == data) {
                addToFavoritesBtn.innerHTML = `Remove favorite ${iconHeart}`;
                addToFavoritesBtn.removeEventListener('click', addToFavorite);
                addToFavoritesBtn.addEventListener('click', deleteToFavorite);
            }
        });
    }
};


