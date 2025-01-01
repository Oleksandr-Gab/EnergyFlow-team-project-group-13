import axios from 'axios';
import { errorResult } from './helpers/iziToast';

const WAIST_PAGINATION = document.querySelector('.waist-pagination');
const FILTER_LIST = document.querySelector('.filter-list');
const GALLERY = document.querySelector('.gallery');
const PAGES_LIST = document.querySelector('.pagination-btn');
const WAIST = document.querySelector('.waist');
const FIELD_SEARCH_WRAPER = document.querySelector('.field-search-wraper');
const TITLE_SLASH = document.querySelector('#slash');

//BASE URL
export const API_BASE_URL = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});

export let exercisesData;

const MUSCLES_BUTTON = document.querySelector('button[name="Muscles"]');

//слухач на завантаження сторінки
document.addEventListener('DOMContentLoaded', async () => {
  await callApiWithQuery({ filter: 'Muscles' });
  //відображати активний фільтр Exercises
  MUSCLES_BUTTON.classList.add('filter-active');
});

//ф-ція get API DATA
export const getExercisesData = async ({ filter, page, limit }) => {
  try {
    exercisesData = await API_BASE_URL.get('/filters', {
      params: { filter, page, limit },
    });
    return exercisesData;
  } catch (error) {
    errorResult(error.message);
  }
};

//слухач на список фільтрів
FILTER_LIST.addEventListener('click', event => {
  event.preventDefault();

  //очищення зайвої розмітки
  GALLERY.innerHTML = '';
  PAGES_LIST.innerHTML = '';
  WAIST.innerHTML = '';
  TITLE_SLASH.innerHTML = '';
  FIELD_SEARCH_WRAPER.style = 'display:none';
  WAIST_PAGINATION.innerHTML = '';

  if (event.target.tagName === 'BUTTON') {
    document.querySelectorAll('.filter-button').forEach(button => {
      button.classList.remove('filter-active');
    });

    event.target.classList.add('filter-active');
    callApiWithQuery({ filter: event.target.name });
  }
});

//слухач на список сторінок
PAGES_LIST.addEventListener('click', event => {
  event.preventDefault();

  //очищення зайвої розмітки
  WAIST.innerHTML = '';
  PAGES_LIST.innerHTML = '';
  GALLERY.innerHTML = '';
  TITLE_SLASH.innerHTML = '';
  FIELD_SEARCH_WRAPER.style = 'display:none';

  // гортання сторінок
  if (event.target.tagName === 'BUTTON') {
    callApiWithQuery({
      filter: event.target.name,
      page: event.target.id,
    });
  }
});

// пагінація та генерація розмітки
async function callApiWithQuery({ filter, page = 1, limit = 12 }) {
  try {
    const renderExercises = await getExercisesData({ filter, page, limit });
    const quantityBtnPgs = () => {
      const totalPages = renderExercises.data.totalPages;
      let markupBtnPgs = '';
      for (let i = 1; i <= totalPages; i++) {
        //если значение ключа page приведенное к Number = счетчику
        if (Number(page) === i) {
          //добавить в разметку класс pg-num-btn-active
          markupBtnPgs += `<li id="${i}"  class="pg-item" > <button id="${i}" class="pg-num-btn pg-num-btn-active" type="button" name="${filter}"
 >${i}</button></li> `;
        } else {
          markupBtnPgs += `<li id="${i}"  class="pg-item" > <button id="${i}" class="pg-num-btn" type="button" name="${filter}"
 >${i}</button></li> `;
        }
      }
      return markupBtnPgs;
    };
    const imgs = renderExercises.data.results.reduce(
      (html, { name, filter, imgUrl }) =>
        html +
        `<li class="gallery-item" id=${name}>
          <div class="card" id="${filter}:${name}">
             <img class="gallery-image"
             src="${imgUrl}"
             alt="${filter}"
            />
            </div>
            <div class="card-description" id="${filter}:${name}">
            <p class="name-description" id="${filter}:${name}">${name}</p>
            <p class="filter-description" id="${filter}:${name}">${filter}</p>
            </div>
          </li>`,
      ''
    );

    const markupBtnPgs = quantityBtnPgs();

    PAGES_LIST.innerHTML = markupBtnPgs;
    GALLERY.innerHTML = imgs;
  } catch (error) {
    errorResult(error.message);
  }
}
