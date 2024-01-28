// для додавання 'npm install axios'
import axios from 'axios';
// для додавання 'npm install izitoast --save'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export let renderImgs;

const FILTER_LIST = document.querySelector('.filter-list');

let filterExercises;
const GALLERY = document.querySelector('.gallery');

//button MUSCLES active by default
const MUSCLES_BUTTON = document.querySelector('button[name="Muscles"]');
MUSCLES_BUTTON.disabled = false;

// Виклик функції при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  callApiWithQuery('Muscles');
});

//делегування слухача на FILTER_LIST
FILTER_LIST.addEventListener('click', event => {
  event.preventDefault();
  //очищення розмітці gallery перед новим пошуком
  GALLERY.innerHTML = '';
  // перевірка if a button was clicked
  if (event.target.tagName === 'BUTTON') {
    // отримаємо значення атрибута "name" button
    filterExercises = event.target.name;
    console.log(filterExercises);
    //виклик функції з отриманним значенням фільтра
    callApiWithQuery(filterExercises);
  }
});

// axios.defaults базова адреса
// axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';
// const FILTER_URL = `/filters`;

// Функція для виклику API та відображення зображень за обраним фільтром
async function callApiWithQuery(filter) {
  const API = axios.create({
    baseURL: 'https://energyflow.b.goit.study/api',
    params: {
      filter: filter,
      page: '1',
      limit: '12',
    },
  });
  try {
    renderImgs = await API.get('/filters');
    // console.log(renderImgs);
    const imgs = renderImgs.data.results.reduce(
      (html, { name, filter, imgUrl }) =>
        html +
        `<li class="gallery-item">
          
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
