// для додавання 'npm install axios'
import axios from 'axios';
// для додавання 'npm install izitoast --save'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const FILTER_LIST = document.querySelector('.filter-list');

let filterExercises;
const GALLERY = document.querySelector('.gallery');

//button MUSCLES active by default
const MUSCLES_BUTTON = document.querySelector('button[name="Muscles"]');

// Виклик функції при завантаженні сторінки
document.addEventListener('DOMContentLoaded', async () => {
  await callApiWithQuery('Muscles');
  MUSCLES_BUTTON.classList.add('active');
});

const getExercisesData = async (filter, page, limit) => {
  const API = axios.create({
    baseURL: 'https://energyflow.b.goit.study/api',
    params: {
      filter: filter,
      page: page,
      limit: limit,
    },
  });

  return await API.get('/filters');
};

//делегування слухача на FILTER_LIST
FILTER_LIST.addEventListener('click', event => {
  event.preventDefault();
  //очищення розмітці gallery перед новим пошуком
  GALLERY.innerHTML = '';
  // перевірка if a button was clicked
  if (event.target.tagName === 'BUTTON') {
    // отримаємо значення атрибута "name" button
    filterExercises = event.target.name;
    MUSCLES_BUTTON.classList.remove('active');
    //виклик функції з отриманним значенням фільтра
    callApiWithQuery(filterExercises);
  }
});

// Функція для виклику API та відображення зображень за обраним фільтром
async function callApiWithQuery(filter) {
  try {
    const data = await getExercisesData(filter, 1, 12);
    // console.log(renderImgs);
    const imgs = data.data.results.reduce(
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
