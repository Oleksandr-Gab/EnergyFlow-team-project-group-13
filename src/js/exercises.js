// для додавання 'npm install axios'
import axios from 'axios';
// для додавання 'npm install izitoast --save'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const FILTER_LIST = document.querySelector('.filter-list');
const GALLERY = document.querySelector('.gallery');
const PAGES_LIST = document.querySelector('.pagination-btn');

//create instance of API
export const API_BASE_URL = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});

export let exercisesData;

//button MUSCLES active by default
const MUSCLES_BUTTON = document.querySelector('button[name="Muscles"]');

// Виклик функції з фільтром за default при завантаженні сторінки
document.addEventListener('DOMContentLoaded', async () => {
  await callApiWithQuery({ filter: 'Muscles' });
  MUSCLES_BUTTON.classList.add('active');
});

//функція запиту на DATA
export const getExercisesData = async ({ filter, page, limit }) => {
  try {
    exercisesData = await API_BASE_URL.get('/filters', {
      params: { filter: filter, page: page, limit: limit },
    });
    return exercisesData;
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: error.message,
      color: 'red',
      position: 'topCenter',
    });
  }
};

//делегування слухача на FILTER_LIST
FILTER_LIST.addEventListener('click', event => {
  event.preventDefault();
  //очищення карток та сторінок
  GALLERY.innerHTML = '';
  PAGES_LIST.innerHTML = '';
  if (event.target.tagName === 'BUTTON') {
    MUSCLES_BUTTON.classList.remove('active');
    //виклик функції з отриманним значенням фільтра
    callApiWithQuery({ filter: event.target.name });
  }
});

//делегування слухача на PAGES_LIST
PAGES_LIST.addEventListener('click', event => {
  event.preventDefault();

  // гортання сторінок
  if (event.target.tagName === 'BUTTON') {
    PAGES_LIST.innerHTML = '';
    GALLERY.innerHTML = '';
    callApiWithQuery({ filter: event.target.name, page: event.target.id });
  }
});

// пагінація та генерація розмітки
async function callApiWithQuery({ filter, page = 1, limit = 12 }) {
  try {
    const renderExercises = await getExercisesData({ filter, page, limit });
    const quantityBtnPgs = () => {
      const totalPages = renderExercises.data.totalPages;
      let btnPgs = '';
      for (let i = 1; i <= totalPages; i++) {
        btnPgs += `<button id="${i}" class="pg-num-btn" type="button" name="${filter}"
 >${i}</button>`;
      }
      return btnPgs;
    };

    const imgs = renderExercises.data.results.reduce(
      (html, { name, filter, imgUrl }) =>
        html +
        `<li class="gallery-item" id=${name}>
          <div class="card" >            
             <img class="gallery-image"
             src="${imgUrl}"
             alt="${filter}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${filter}:${name}">${name}</p>
            <p class="filter-description">${filter}</p>
            </div>
          </li>`,
      ''
    );
    const pgs = quantityBtnPgs();

    PAGES_LIST.insertAdjacentHTML('afterbegin', pgs);
    GALLERY.insertAdjacentHTML('afterbegin', imgs);
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: error.message,
      color: 'red',
      position: 'topCenter',
    });
  }
}
