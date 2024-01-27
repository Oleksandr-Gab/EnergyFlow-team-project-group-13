'use strict';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let page;
let totalItems;
let totalPages;
const limit = 8;

// ---------------------------------------------------------
const GALLERY = document.querySelector('.Gallery');
// ---------------------------------------------------------
// const cardItem = document.querySelector('.filter-imag');
const CONTAINER_BTN = document.querySelector('.FilterList');

const EXERCISES_URL = new URL('https://energyflow.b.goit.study/api/exercises?');
const FILTERS_URL = new URL('https://energyflow.b.goit.study/api/filters?');

// Функція запиту--------------------------------------------

const fetchExercises = async request => {
  const exercises = await axios.get(request);

  return exercises.data;
};
// --------------------------------------------------------

// --------- filters  listener-----------------------------

CONTAINER_BTN.addEventListener('click', event => {
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

GALLERY.addEventListener('click', event => {
  event.preventDefault();
  EXERCISES_URL.searchParams.append('limit', limit);
  EXERCISES_URL.searchParams.append('page', 1);
  EXERCISES_URL.searchParams.append('name', event.target.name);

  fetchExercises(EXERCISES_URL)
    .then(response => {
      console.log(response.results);
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
  GALLERY.insertAdjacentHTML(
    'afterbegin',
    arr.reduce(
      (html, { burnedCalories, name, bodyPart, rating, time, target }) =>
        html +
        `<div class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${rating}</p>
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
    </div>`,
      ''
    )
  );
}

// ==============================================================================

// Рендер фільтру вправ ---------------------------------

function renderFilters(arr) {
  GALLERY.insertAdjacentHTML(
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
