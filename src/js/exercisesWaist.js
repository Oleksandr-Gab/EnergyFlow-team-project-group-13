import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { activeModalBtn } from './modal-pop-up.js';

//  -------Текст при відсутності вправи ------
const partError =
  'Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.';
// ------------------------------------------------
const searchContainer = document.querySelector('.field-search-wraper');
const heightViewport = document.querySelector('.search-block');
const galleryDalley = document.querySelector('.gallery');
const searchBtn = document.querySelector('.search-icon');
let titleSlash = document.querySelector('#slash');
const galleryWaist = document.querySelector('.waist');
const searchPart = document.querySelector('#search');
// paginationBtn = document.querySelector('.pagination-btn');
const viewportWidth = innerWidth;
let paramArr;
let paramObj;
let page;
let totalPages;

// -------- Екземпляр AXIOS ------------------------------------
const apiWaist = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});

// ----- Функція запиту -----------------------------
const fetchExercises = async (lastString, { params }) => {
  const exercises = await apiWaist.get(lastString, {
    params,
  });
  return exercises;
};

// ----Запит --------------------------------------------
galleryDalley.addEventListener('click', event => {
  event.preventDefault();

  galleryWaist.innerHTML = '';
  galleryDalley.innerHTML = '';
  titleSlash.innerHTML = '';

  // paginationBtn.style.display = 'block';
  searchContainer.style.display = 'block';
  galleryWaist.classList.add('information-cards');

  // ------------------------------------------------------------
  paramObj = event.target.id;
  paramArr = paramObj.split(':');
  apiWaist.defaults.params = {
    page: 1,
    limit: viewportWidth > 1400 ? '9' : '8',
    muscles: paramArr[0] === 'Muscles' ? paramArr[1] : null,
    bodypart: paramArr[0] === 'Body parts' ? paramArr[1] : null,
    equipment: paramArr[0] === 'Equipment' ? paramArr[1] : null,
  };
  // -------------------------------------------------------------

  titleSlash.insertAdjacentHTML(
    'beforeend',
    `<p>&#8260;<span class="title-span">${paramArr[1]}</span></p>`
  );

  fetchExercises('/exercises', {
    params: {},
  })
    .then(response => {
      renderExercises(response.data.results);
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    });
});

// ----- Пошук вправи за інпутом -----------------------------

let inputValue;
searchPart.addEventListener('input', event => {
  inputValue = event.target.value;
});

searchBtn.addEventListener('click', event => {
  galleryWaist.innerHTML = '';
  galleryDalley.innerHTML = '';
  // -------------------------------------------------------------
  apiWaist.defaults.params = {
    page: 1,
    limit: viewportWidth > 1400 ? '9' : '8',
    keyword: inputValue,
    muscles: paramArr[0] === 'Muscles' ? paramArr[1] : null,
    bodypart: paramArr[0] === 'Body parts' ? paramArr[1] : null,
    equipment: paramArr[0] === 'Equipment' ? paramArr[1] : null,
  };
  // -------------------------------------------------------------

  fetchExercises('/exercises', {
    params: {},
  })
    .then(response => {
      console.log(response.data.totalPages);
      if (response.data.totalPages === null) {
        galleryWaist.innerHTML = `${partError}`;
      }
      renderExercises(response.data.results);
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      searchPart.value = '';
    });
});

// ---Рендер карток --------------------------------
export function renderExercises(arr) {
  galleryWaist.insertAdjacentHTML(
    'afterbegin',
    arr.reduce(
      (html, { burnedCalories, name, bodyPart, rating, time, target, _id }) =>
        html +
        `<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${rating}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${_id}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="../img/sprite.svg#icon-right"></use>
            </svg>
            </button>
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
  activeModalBtn();
}
