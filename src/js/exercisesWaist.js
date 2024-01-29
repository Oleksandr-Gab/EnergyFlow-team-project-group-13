// import { openModal } from './modal-pop-up';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let page;
let totalItems;
let maxPages;
const limit = 8;

//  -------Текст при відсутності вправи ------
const partError =
  'Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.';

const galleryDalley = document.querySelector('.gallery');
const filterBtns = document.querySelector('.filter-list');
const galleryWaist = document.querySelector('.waist');
const searchPart = document.querySelector('#search');
const searchBlock = document.querySelector('.search-block');
const viewportWidth = innerWidth;
const arrowRight = document.querySelector('.workout-btn');
console.log(viewportWidth);

const apiWaist = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});

// export const fetchExercises = async request => {
//   const exercises = await apiWaist.get(request);

//   return exercises;
// };

// -------------------------------------------------------------

// galleryDalley.addEventListener('click', handClick);

// bodypart
// muscles
// equipment

// keyword

// galleryWaist.removeEventListener('click', handClick);

const fetchExercises = async request => {
  const exercises = await apiWaist.get(request, {
    params: {
      // ----- papam for input --------
      // bodypart: 'waist',
      // muscles: 'abs',
      // equipment: 'roller',
      // keyword: 'cable',
      // ---------------------------------------------------
      page: '1',
      // -------ліміт ---------------------- ???????????????
      // limit: '10',
    },
  });
  return exercises;
};

// ---example ----
const abs = 'abs';

galleryDalley.addEventListener('click', event => {
  galleryDalley.innerHTML = '';
  galleryWaist.innerHTML = '';
  searchPart.style.display = 'block';
  searchBlock.style.display = 'block';
  // ------------------------------------

  galleryWaist.classList.add('information-cards');

  apiWaist.defaults.params = {
    //  дані, отримані при кліку на фото на приклад: (muscles: 'abs')
    currentButton: 'clickOnPhoto-id...',
    limit: '8',
  };
  fetchExercises('/exercises')
    .then(response => {
      console.log(response.data);

      renderExercises(response.data.results);
    })
    .catch(error => {
      iziToast.error({
        message: error,
        position: 'topRight',
      });
    });
});

// -----------------------------------------------------------

// searchPart.addEventListener('input', event => {
//   clearTimeout(typingTimer);

//   typingTimer = setTimeout(function () {
//     let emailValue = searchPart.value;
//     partName = searchPart.value;

//     console.log(partName);
//     console.log('Введенное значение после задержки:', emailValue);
//   }, 2000);
// });

// ----- Пошук вправи за інпутом -----------------------------

let partName;
let typingTimer;
searchPart.addEventListener('input', event => {
  clearTimeout(typingTimer);

  typingTimer = setTimeout(function () {
    partName = searchPart.value;
    console.log(partName);
  }, 1000);

  searchBlock.addEventListener('click', event => {
    console.log(partName.toLowerCase());
    // ----------- Підставляемо значення інпут "Назва вправи" ----------------
    if (partName.trim() !== 'input-value') {
      galleryWaist.innerHTML = `<div class="errorEmageContainer">${partError}</div>`;
      return;
    }
    // -------Запит --------------
    galleryWaist.classList.add('information-cards');
    apiWaist.defaults.params = {
      //  дані, отримані з 'input search' приклад: (muscles: 'abs')
      keydown: 'inputValue',
      limit: '8',
    };
    fetchExercises('/exercises')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        iziToast.error({
          message: error,
          position: 'topRight',
        });
      });
  });

  // console.log(partName.trim());
});

function renderExercises(arr) {
  // ---Підвид вправи----- id картки -----
  // let part = 'abs';
  // const listPart = arr.filter(item => item.target === part);

  // ---------------------
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
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container">
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
}

// ------------------------------------------------------------------------------

// !!!!!!!!!!!!!!!!!! НЕ ПИШИ В ЦЬОМУ ФАЙЛІ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// galleryWaist.addEventListener('click', event => {
//   event.preventDefault();

// ---- ПИШИ В ІНШОМУ ФАЙЛІ -----------------------------

//   const galleryCard = event.target.closest('.gallery-card');
//   if (galleryCard) {
//     const cardId = galleryCard.dataset.id;
//     openModal();
//   }
// });

// !!!!!!!!!!!!!!!!!! НЕ ПИШИ В ЦЬОМУ ФАЙЛІ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
