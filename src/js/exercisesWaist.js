import { openModal } from './modal-pop-up';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let page;
let totalItems;
let maxPages;
const limit = 8;

const galleryDalley = document.querySelector('.gallery');
const galleryWaist = document.querySelector('.pagination-btn');
const arrowRight = document.querySelector('.workout-btn-container');

const apiWaist = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
  params: {
    page: '1',
    limit: '8',
  },
});

// ----- Функція запиту--------------------------------------------

export const fetchExercises = async request => {
  const exercises = await apiWaist.get(request);

  return exercises;
};

// -------------------------------------------------------------

function handClick() {
  galleryDalley.innerHTML = '';
  galleryWaist.innerHTML = '';
  galleryWaist.classList.add('information-cards');
  fetchExercises('/exercises')
    .then(response => {
      console.log(response);
      console.log(response.data.results);
      renderExercises(response.data.results);
    })
    .catch(error => {
      iziToast.error({
        message: error,
        position: 'topRight',
      });
    });
}

galleryDalley.addEventListener('click', handClick);

// galleryWaist.removeEventListener('click', handClick); ??????????????????

// --------------------------------------------------------
//  Виводимо в консоль Id елемента списку

galleryWaist.addEventListener('click', event => {
  console.log(event.target.id);
});

// --------------------------------------------------------

function renderExercises(arr) {
  galleryWaist.insertAdjacentHTML(
    'afterbegin',
    arr.reduce(
      (html, { burnedCalories, name, bodyPart, rating, time, target, _id }) =>
        html +
<<<<<<< HEAD
        `<li class="gallery-card" id=${_id}>
=======
        `<li class="gallery-card" data-id="${_id}">
>>>>>>> main
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${rating}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container">
            <button class="workout-btn">Start</button>
            <svg class="icon-right" width="14" height="16">
                <use href="../img/sprite.svg#icon-right"></use>
            </svg>
        </div>
      </div>

      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="../img/sprite.svg#run"></use>
              </svg>
          </div>
          <h3>${name}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${burnedCalories}/${time}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${bodyPart}</li>
            <li class="target"><span class="params-text">Target:</span> ${target}</li>
      </ul>
    </li>`,
      ''
    )
  );
}

<<<<<<< HEAD
//  <li class="gallery-item" id=${name}>
=======


// ------------------------------------------------------------------------------
galleryWaist.addEventListener('click', event => {
  event.preventDefault();

  const galleryCard = event.target.closest('.gallery-card');
  if (galleryCard) {
    const cardId = galleryCard.dataset.id;
    openModal();
  }
});

>>>>>>> main
