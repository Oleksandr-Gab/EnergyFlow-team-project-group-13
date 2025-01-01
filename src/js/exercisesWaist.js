import axios from 'axios';

import { activeModalBtn } from './modal-pop-up.js';
import iconURL from '../img/sprite.svg';
import { errorResult } from './helpers/iziToast.js';

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
const btnActive = document.querySelectorAll('.btn-waist-active');
const waistBtnContainer = document.querySelector('.main-waist-btn-container');

const viewportWidth = innerWidth;
let paramArr;
let paramObj;
let page = 1;
let totalPages;
let baseTranslate = 16;
let activeBtn = 1;

// -------- Екземпляр AXIOS ------------------------------------
const apiWaist = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});

// ----- Функція запиту -----------------------------
const fetchExercises = async (lastString, { params }) => {
  return await apiWaist.get(lastString, {
    params,
  });
};

galleryDalley.addEventListener('click', event => {
  event.preventDefault();

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

  baseTranslate = 16;
  activeBtn = 1;
  waistBtnContainer.style.display = 'block';
  searchContainer.style.display = 'block';
  galleryWaist.classList.add('information-cards');
  paramObj = event.target.id;
  paramArr = paramObj.split(':');
  // ----------------------------------------------------------------
  apiWaist.defaults.params = {
    page: page,
    limit: viewportWidth > 1400 ? '9' : '8',
    muscles: paramArr[0] === 'Muscles' ? paramArr[1] : null,
    bodypart: paramArr[0] === 'Body parts' ? paramArr[1] : null,
    equipment: paramArr[0] === 'Equipment' ? paramArr[1] : null,
  };
  // -----------------------------------------------------------------
  titleSlash.insertAdjacentHTML(
    'beforeend',
    `<p>&#8260;<span class="title-span">${paramArr[1]}</span></p>`
  );
  fetchExercises('/exercises', {
    params: {},
  })
    .then(response => {
      renderExercises(response.data.results);
      paginationWaist(response.data.totalPages);
    })
    .catch(error => {
      errorResult(error.message);
    });
});

// ==============================
paginationWrapper.addEventListener('click', event => {
  event.preventDefault();
  const arrItem = [...paginationWrapper.children];

  let page = event.target.id * 1;
  let translate = 42;

  if (page > activeBtn && event.target.tagName === 'LI') {
    paginationWrapper.style.transform = `translateX(-${(baseTranslate +=
      translate)}px)`;
    activeBtn = event.target.id * 1;
  } else if (page < activeBtn && event.target.tagName === 'LI') {
    paginationWrapper.style.transform = `translateX(-${(baseTranslate -=
      translate)}px)`;
    activeBtn = page;
  }

  const forArr = arrItem.forEach(item => {
    if (item.classList[1] && event.target.tagName === 'LI') {
      item.classList.remove('btn-waist-active');
    }
  });
  if (event.target.tagName === 'LI') {
    event.target.classList.add('btn-waist-active');
  }

  paginationBtn.innerHTML = '';
  galleryWaist.innerHTML = '';
  galleryDalley.innerHTML = '';
  titleSlash.innerHTML = '';
  searchContainer.style.display = 'block';
  galleryWaist.classList.add('information-cards');
  // ------------------------------------------------------------
  apiWaist.defaults.params = {
    page: page,
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
      errorResult(error.message);
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
  paginationWrapper.innerHTML = '';
  activeBtn = 1;
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
      totalPages = response.data.totalPages;

      if (response.data.totalPages === null) {
        heightViewport.style.height = '100vh';
        galleryWaist.innerHTML = `<div class="invalid-name">${partError}</div>`;
      }
      renderExercises(response.data.results);
      paginationWaist(totalPages);
    })
    .catch(error => {
      errorResult(error.message);
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

        <div class="workout-btn-container" id="${_id}" data-action="right">
            <button class="workout-btn">Start
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

// ----- Рендер кнопок пагінації ---------------
function paginationWaist(numb) {
  for (let i = 1; i <= numb; i++) {
    paginationWrapper.insertAdjacentHTML(
      'beforeend',
      `<li class="btn-item-waist" id="${i}">${i}</li>`
    );
  }
  paginationWrapper.firstChild.classList.add('btn-waist-active');
  paginationWrapper.style.transform = 'translateX(-1px)';
}
