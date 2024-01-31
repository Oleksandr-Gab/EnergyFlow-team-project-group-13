import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
    activeModalBtn();
});

const exerciseModal = document.getElementById('exerciseModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const exerciseInfo = document.getElementById('information');
const addToFavoritesBtn = document.getElementById('addToFavoritesBtn');

let openModalBtn;
let modallResponseData;

async function getData(id) {
    try {
        const modallApi = axios.create({
            baseURL: 'https://energyflow.b.goit.study/api/exercises',
        });
        const responseModall = await modallApi.get(id);
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
            let id = event.target.id;
            getData(id);
        });
    });
};

async function renderCard(data) {
    const { bodyPart, burnedCalories, description, equipment, gifUrl, name, popularity, rating, target, time } = data;
    const modalHtml = `

        <div class="gif">
        <img src="${gifUrl}" alt="${name}" >
        </div>

        <div class = "text">

        <h2>${name}</h2>
        
        <div class="rating-container">
            <p>${rating}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>

        <ul class="info-block">
    <li class="info-item">
        <span class="info-text">Target</span> ${target}
    </li>
    <li class="info-item">
        <span class="info-text">Body Part</span> ${bodyPart}
    </li>
    <li class="info-item">
        <span class="info-text">Equipment</span> ${equipment}
    </li>
    <li class="info-item">
        <span class="info-text">Popular</span> ${popularity}
    </li>
    <li class="info-item">
        <span class="info-text">Burned Calories</span> ${burnedCalories}/${time}min
    </li>
</ul>


        <p class="description">Description: ${description}</p> 
        </div>`;
    
    exerciseInfo.innerHTML = modalHtml;
    await auditLocal();
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
    let localFavCart = localStorage.getItem('favoritesCard');
    let newLocalFavCart = [];

    if (localFavCart != null) {
        newLocalFavCart = JSON.parse(localFavCart);
};
    const newObj = getObj(modallResponseData);
    newLocalFavCart.push(newObj);

    localStorage.setItem('favoritesCard', JSON.stringify(newLocalFavCart));
    auditLocal()
};

// функція  видалення інфи в localStor

const deleteToFavorite = () => {
    const { _id } = modallResponseData;
    let localFavCart = localStorage.getItem('favoritesCard');
    let newLocalFavCart = JSON.parse(localFavCart).filter(el => el._id != _id);
    
    localStorage.setItem('favoritesCard', JSON.stringify(newLocalFavCart));
    auditLocal();
}

// Функція перевірки localStor
length
const auditLocal = () => {
    const { _id } = modallResponseData;
    let localFavCart = localStorage.getItem('favoritesCard');
    addToFavoritesBtn.removeEventListener('click', deleteToFavorite);
    addToFavoritesBtn.addEventListener('click', addToFavorite);
    addToFavoritesBtn.innerHTML = "Add to favorites";
    if (localFavCart != null) {
        JSON.parse(localFavCart).forEach(el => {
            if (el._id == _id) {
                addToFavoritesBtn.innerHTML = "Delete favorite";
                addToFavoritesBtn.removeEventListener('click', addToFavorite)
                addToFavoritesBtn.addEventListener('click', deleteToFavorite)
            } else {
                addToFavoritesBtn.removeEventListener('click', deleteToFavorite);
                addToFavoritesBtn.addEventListener('click', addToFavorite);
                addToFavoritesBtn.innerHTML = "Add to favorites";
            }
        });
    }
};