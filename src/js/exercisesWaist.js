import { openModal } from './modal-pop-up';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import { renderImgs } from './exercises.js';

// console.log(renderImgs);

let page;
let totalItems;
let maxPages;
const limit = 8;

const galleryWaist = document.querySelector('.gallery');

const FILTER_URL = new URL('https://energyflow.b.goit.study/api/filters?');
const EXERCISES_URL = new URL('https://energyflow.b.goit.study/api/exercises?');

// Функція запиту--------------------------------------------

export const fetchExercises = async request => {
  const exercises = await axios.get(request);

  return exercises.data;
};
// --------------------------------------------------------

// --------------filter listener ----------------------------
FILTER_URL.searchParams.append('filter', 'Muscles');
fetchExercises(FILTER_URL)
  .then(response => {
    console.log(response);

    // name який треба прив'язати на перше фото "Muscles"
    console.log(response.results[0].name);
  })
  .catch(error => {
    iziToast.error({
      message: 'Sorry. Please try again!',
      position: 'topRight',
    });
  });

// --------- exercises  listener-----------------------------

galleryWaist.addEventListener('click', event => {
  event.preventDefault();
  galleryWaist.innerHTML = '';

  // console.log(event.target.name);
  galleryWaist.classList.add('information-cards');

  // EXERCISES_URL.searchParams.append('name', event.target.name);
  EXERCISES_URL.searchParams.append('limit', limit);
  EXERCISES_URL.searchParams.append('page', 1);

  fetchExercises(EXERCISES_URL)
    .then(response => {
      console.log(response);
      // console.log(response);
      //   maxPages = Math.ceil(response.totalPages / limit);
      //   console.log(maxPages);
      //   if (maxPages > 1) {
      //     paginationBtn.style.display = 'flex';
      //     renderBtn(maxPages);
      //   }

      renderExercises(response.results);
      // return response.results;
    })
    .catch(error => {
      iziToast.error({
        message: 'Sorry. Please try again!',
        position: 'topRight',
      });
    });
});

// --------------------------------------------------------

// galleryWaist.addEventListener('click', event => {
//   console.log(event.target._id);
// });

// --------------------------------------------------------

function renderExercises(arr) {
  galleryWaist.insertAdjacentHTML(
    'afterbegin',
    arr.reduce(
      (html, { burnedCalories, name, bodyPart, rating, time, target, _id }) =>
        html +
        `<li class="gallery-card" data-id="${_id}">
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



// ------------------------------------------------------------------------------
galleryWaist.addEventListener('click', event => {
  event.preventDefault();

  const galleryCard = event.target.closest('.gallery-card');
  if (galleryCard) {
    const cardId = galleryCard.dataset.id;
    openModal();
  }
});

