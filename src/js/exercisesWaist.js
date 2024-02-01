import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { activeModalBtn } from './modal-pop-up.js';
import iconURL from '../img/sprite.svg';

//  -------Текст при відсутності вправи ------
const partError =
  'Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.';
// ------------------------------------------------
const searchContainer = document.querySelector('.field-search-wraper');
const heightViewport = document.querySelector('.exercises-wraper');
const galleryDalley = document.querySelector('.gallery');
const searchBtn = document.querySelector('.search-icon');
let titleSlash = document.querySelector('#slash');
const galleryWaist = document.querySelector('.waist');
const searchPart = document.querySelector('#search');
const paginationBtn = document.querySelector('.pagination-btn');
const paginationWrapper = document.querySelector('.waist-pagination');

const viewportWidth = innerWidth;
let paramArr;
let paramObj;
let page = 1;
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

// ----------------------------------------------------------
//  ----- перероблена функція ----
galleryDalley.addEventListener('click', event => {
  event.preventDefault();
  markupBtnPgs = '';
  // гортання сторінок
  // if (event.target.tagName === 'BUTTON') {
  //   galleryWaist.innerHTML = '';
  //   galleryDalley.innerHTML = '';
  // }

  if (
    event.target.nodeName !== 'DIV' &&
    event.target.nodeName !== 'H2' &&
    event.target.nodeName !== 'P'
  ) {
    return;
  }
  paginationWrapper.innerHTML = '';
  paginationBtn.innerHTML = '';
  galleryWaist.innerHTML = '';
  galleryDalley.innerHTML = '';
  titleSlash.innerHTML = '';

  // paginationBtn.style.display = 'block';
  searchContainer.style.display = 'block';
  galleryWaist.classList.add('information-cards');

  paramObj = event.target.id;
  paramArr = paramObj.split(':');
  apiWaist.defaults.params = {
    page: page,
    limit: viewportWidth > 1400 ? '9' : '8',
    muscles: paramArr[0] === 'Muscles' ? paramArr[1] : null,
    bodypart: paramArr[0] === 'Body parts' ? paramArr[1] : null,
    equipment: paramArr[0] === 'Equipment' ? paramArr[1] : null,
  };
   titleSlash.insertAdjacentHTML(
    'beforeend',
    `<p>&#8260;<span class="title-span">${paramArr[1]}</span></p>`
  );
  //виклик ф-ції з обраним користувачем фільтром та сторінкою
  request();
});
let markupBtnPgs = '';
function request() {
  fetchExercises('/exercises', {
    params: {},
  })
    .then(response => {
      totalPages = 0;
      totalPages = response.data.totalPages;
      const quantityBtnPgs = () => {
        // let markupBtnPgs = '';
        for (let i = 1; i <= totalPages; i++) {
          //если значение ключа page приведенное к Number = счетчику
          if (Number(page) === i) {
            //добавить в разметку класс pg-num-btn-active
            markupBtnPgs += `<li id="${i}"  class="pg-item" > <button id="${i}" class="pg-num-btn pg-num-btn-active" type="button"
 >${i}</button></li> `;
          } else {
            markupBtnPgs += `<li id="${i}"  class="pg-item" > <button id="${i}" class="pg-num-btn" type="button"
 >${i}</button></li> `;
          }
        }
        return markupBtnPgs;
      };

      const pgn = quantityBtnPgs();
      paginationWrapper.innerHTML = pgn;
      renderExercises(response.data.results);
      console.log(totalPages);
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    });
}

// ---- pagination ----------

// -----------------------------------------------------------

paginationWrapper.addEventListener('click', event => {
  // totalPages = 0;
  markupBtnPgs = '';
  galleryWaist.innerHTML = '';
  console.log(totalPages);
  // paramObj = event.target.id;
  const pageNum = event.target.textContent * 1;
  paramArr = paramObj.split(':');
  apiWaist.defaults.params = {
    page: pageNum,
    limit: viewportWidth > 1400 ? '9' : '8',
    muscles: paramArr[0] === 'Muscles' ? paramArr[1] : null,
    bodypart: paramArr[0] === 'Body parts' ? paramArr[1] : null,
    equipment: paramArr[0] === 'Equipment' ? paramArr[1] : null,
  };

  fetchExercises('/exercises', {
    params: {},
  })
    .then(response => {
      // totalPages = response.data.totalPages;
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
        heightViewport.style.height = '100vh';
        galleryWaist.innerHTML = `<div class='invalid-name'>${partError}</div>`;
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
        `<li class="waist-gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${rating}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${iconURL}#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${_id}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="${iconURL}#icon-right"></use>
            </svg>
            </button>
        </div>
      </div>

      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="${iconURL}#run"></use>
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
