// для додавання 'npm install axios'
import axios from 'axios';
// для додавання 'npm install izitoast --save'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const FILTER_LIST = document.querySelector('.filter-list');
const GALLERY = document.querySelector('.gallery');
const PAGES_LIST = document.querySelector('.pagination-btn');

export let exercisesData;
let btnPgs = '';

//button MUSCLES active by default
const MUSCLES_BUTTON = document.querySelector('button[name="Muscles"]');

// Виклик функції при завантаженні сторінки
document.addEventListener('DOMContentLoaded', async () => {
  await callApiWithQuery('Muscles');
  MUSCLES_BUTTON.classList.add('active');
});

//функція запиту на DATA
export const getExercisesData = async (filter, page, limit) => {
  try {
    const API = axios.create({
      baseURL: 'https://energyflow.b.goit.study/api',
      params: {
        filter: filter,
        page: page,
        limit: limit,
      },
    });
    exercisesData = await API.get('/filters');
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
  //очищення розмітці gallery перед новим пошуком
  GALLERY.innerHTML = '';
  PAGES_LIST.innerHTML = '';
  btnPgs = '';
  // перевірка if a button was clicked
  if (event.target.tagName === 'BUTTON') {
    // отримаємо значення атрибута "name" button
    MUSCLES_BUTTON.classList.remove('active');
    //виклик функції з отриманним значенням фільтра
    callApiWithQuery(event.target.name);
  }
});

//делегування слухача на PAGES_LIST
PAGES_LIST.addEventListener('click', event => {
  event.preventDefault();
  btnPgs = '';
  // PAGES_LIST.innerHTML = '';
  // перевірка if a button was clicked
  if (event.target.tagName === 'BUTTON') {
  }
});

//параметри запиту API
let page = 1;
let limit = 12;

// Функція для виклику API та відображення зображень за обраним фільтром та параметрами
async function callApiWithQuery(filter) {
  try {
    const renderExercises = await getExercisesData(filter, page, limit);
    // console.log(renderExercises);
    const imgs = renderExercises.data.results.reduce(
      (html, { name, filter, imgUrl }) =>
        html +
        `<li class="gallery-item" id=${name}>
           <div class="card">
            <a class="gallery-link" href="${imgUrl}">
             <img class="gallery-image"
             src="${imgUrl}"
             alt="${filter}"
             style = "background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url("${imgUrl}"), lightgray 1.925px -135.663px / 106.102% 202.346% no-repeat;"
            />
            </a>
            </div>
            <div class="card-description">
            <p class="name-description">${name}</p>
            <p class="filter-description">${filter}</p>
          </li>`,
      ''
    );
    console.log(btnPgs);
    const quantityBtnPgs = () => {
      const totalPages = renderExercises.data.totalPages;
      // let btnPgs = '';
      for (let i = 1; i <= totalPages; i++) {
        btnPgs += `<button class="pg-num-btn" type="button"
 >${i}</button>`;
      }

      return btnPgs;
    };
    console.log(quantityBtnPgs());
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
