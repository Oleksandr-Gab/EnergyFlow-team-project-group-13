import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import { renderImgs } from '../main.js';

// console.log(renderImgs);

let page;
let totalItems;
let maxPages;
const limit = 8;

const galleryWaist = document.querySelector('.gallery');

const EXERCISES_URL = new URL('https://energyflow.b.goit.study/api/exercises?');

// Функція запиту--------------------------------------------

const fetchExercises = async request => {
  const exercises = await axios.get(request);

  return exercises.data;
};
// --------------------------------------------------------

// --------- exercises  listener-----------------------------

galleryWaist.addEventListener('click', event => {
  event.preventDefault();
  //   galleryWaist.innerHTML = '';

  galleryWaist.classList.add('information-cards');

  EXERCISES_URL.searchParams.append('limit', limit);
  EXERCISES_URL.searchParams.append('page', 1);
  EXERCISES_URL.searchParams.append('name', '?');

  fetchExercises(EXERCISES_URL)
    .then(response => {
      console.log(response);
      //   maxPages = Math.ceil(response.totalPages / limit);
      //   console.log(maxPages);
      //   if (maxPages > 1) {
      //     paginationBtn.style.display = 'flex';
      //     renderBtn(maxPages);
      //   }
      renderExercises(response.results);
    })
    .catch(error => {
      iziToast.error({
        message: 'Sorry. Please try again!',
        position: 'topRight',
      });
    });
});

// --------------------------------------------------------

function renderExercises(arr) {
  galleryWaist.insertAdjacentHTML(
    'afterbegin',
    arr.reduce(
      (html, { burnedCalories, name, bodyPart, rating, time, target }) =>
        html +
        `<li class="gallery-card">
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
