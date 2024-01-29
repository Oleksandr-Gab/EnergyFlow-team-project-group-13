// для додавання 'npm install axios'
import axios from 'axios';
// для додавання 'npm install izitoast --save'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const FILTER_LIST = document.querySelector('.filter-list');
const GALLERY = document.querySelector('.gallery');
const PAGES_LIST = document.querySelector('.pagination-btn');

export let exercisesData;

//button MUSCLES active by default
const MUSCLES_BUTTON = document.querySelector('button[name="Muscles"]');

// Виклик функції з фільтром за default при завантаженні сторінки
document.addEventListener('DOMContentLoaded', async () => {
  await callApiWithQuery({ filter: 'Muscles' });
  MUSCLES_BUTTON.classList.add('active');
});

//функція запиту на DATA
export const getExercisesData = async (filter, page, limit) => {
  // console.log(filter, page, limit);
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
  //очищення розмітці перед новим пошуком
  GALLERY.innerHTML = '';
  PAGES_LIST.innerHTML = '';
  // перевірка if a button was clicked
  if (event.target.tagName === 'BUTTON') {
    // отримаємо значення атрибута "name" button
    MUSCLES_BUTTON.classList.remove('active');
    //виклик функції з отриманним значенням фільтра
    callApiWithQuery({ filter: event.target.name });
  }
});

//делегування слухача на PAGES_LIST
PAGES_LIST.addEventListener('click', event => {
  event.preventDefault();

  // перевірка if a button was clicked
  if (event.target.tagName === 'BUTTON') {
    PAGES_LIST.innerHTML = '';
    GALLERY.innerHTML = '';
    callApiWithQuery({ filter: event.target.name, page: event.target.id });
  }
});

// виклик API та створення розмітки за обраним фільтром
async function callApiWithQuery({ filter, page = 1, limit = 12 }) {
  try {
    const renderExercises = await getExercisesData(filter, page, limit);

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
            <p class="name-description">${name}</p>
            <p class="filter-description">${filter}</p>
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
