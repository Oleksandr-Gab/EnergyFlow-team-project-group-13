import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let page;
let totalItems;
let totalPages;
const limit = 8;

// ---------------------------------------------------------
const gallery = document.querySelector('.cards-container');
// ---------------------------------------------------------
const cardItem = document.querySelector('.filter-imag');
const containerBtn = document.querySelector('.filter-button');

const EXERCISES_URL = new URL('https://energyflow.b.goit.study/api/exercises?');
const FILTERS_URL = new URL('https://energyflow.b.goit.study/api/filters?');

// Функція запиту--------------------------------------------

const fetchExercises = async request => {
  const exercises = await axios.get(request);

  return exercises.data;
};
// --------------------------------------------------------

// --------- filters  listener-----------------------------

containerBtn.addEventListener('click', event => {
  event.preventDefault();
  fetchExercises(FILTERS_URL)
    .then(response => {
      console.log(response.results);

      renderFilters(response.results);
    })
    .catch(error => {
      iziToast.error({
        message: 'Sorry. Please try again!',
        position: 'topRight',
      });
    });
});
// ----------------------------------------------------------

// --------- exercises  listener-----------------------------

cardItem.addEventListener('click', event => {
  event.preventDefault();
  console.log('hi');
  EXERCISES_URL.searchParams.append('limit', limit);
  EXERCISES_URL.searchParams.append('page', 1);
  EXERCISES_URL.searchParams.append('name', event.target.name);
  console.log(event.target);

  fetchExercises(EXERCISES_URL)
    .then(response => {
      console.log(response);
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
  gallery.insertAdjacentHTML(
    'afterbegin',
    arr.reduce(
      (html, {}) =>
        html +
        `<div class="header-card">
                <div class="workout">WORKOUT</div>
                <div class="rating">
                  <p>${0.4}</p>
                  <svg class="instagram-icon svg" width="12" height="12">
                  <use href="./img/sprite.svg#icon-instagram"></use>
                </svg>
                </div>
                 
                <div class="workout-btn-container">
                  <button class="workout-btn">Start</button>
                  <svg class="instagram-icon svg" width="14" height="16">
                  <use href="./img/sprite.svg#icon-instagram"></use>
                </svg>
                </div>
                
              </div>

              <div class="title-card">
                  <div class="icon-card">
                    <svg class="instagram-icon svg" width="14" height="16">
                  <use href="./img/sprite.svg#icon-instagram"></use>
                </svg>
                  </div>
                  <h3>${title}</h3>
                </div>

                <ul class="params-card">
                  <li class="calories"><span class="params-text">Burned calories:</span> ${calories}</li>
                  <li class="body-part"><span class="params-text">Body part:</span> ${
                    Body - part
                  }</li>
                  <li class="target"><span class="params-text">Target:</span> ${Target}</li>
                </ul>`,
      ''
    )
  );
}

// ==============================================================================

// Рендер фільтру вправ ---------------------------------

function renderFilters(arr) {
  gallery.insertAdjacentHTML(
    'afterbegin',
    arr.reduce(
      (html, { imgUrl }) =>
        html +
        `<div class="filter-imag">
        <img src="${imgUrl}" alt="photo">
        </div>`,
      ''
    )
  );
}
