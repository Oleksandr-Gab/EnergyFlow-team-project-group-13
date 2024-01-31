
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const FILTER_LIST = document.querySelector('.filter-list');
const GALLERY = document.querySelector('.gallery');
const PAGES_LIST = document.querySelector('.pagination-btn');
const WAIST = document.querySelector('.waist');

export const API_BASE_URL = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});

export let exercisesData;

const MUSCLES_BUTTON = document.querySelector('button[name="Muscles"]');
let pagesButton;

document.addEventListener('DOMContentLoaded', async () => {
  await callApiWithQuery({ filter: 'Muscles' });
  MUSCLES_BUTTON.classList.add('filter-active');
  pagesButton = document.querySelector('.pg-num-btn');
  pagesButton.classList.add('pg-num-btn-active');
});

export const getExercisesData = async ({ filter, page, limit }) => {
  try {
    exercisesData = await API_BASE_URL.get('/filters', {
      params: { filter, page, limit },
    });
    return exercisesData;
  } catch (error) {
    iziToast.error({
      message: error.message,
      color: 'red',
      position: 'topCenter',
    });
  }
};

FILTER_LIST.addEventListener('click', event => {
  event.preventDefault();
  GALLERY.innerHTML = '';
  PAGES_LIST.innerHTML = '';
  WAIST.innerHTML = '';

  if (event.target.tagName === 'BUTTON') {
    document.querySelectorAll('.filter-button').forEach(button => {
      button.classList.remove('filter-active');
    });

    event.target.classList.add('filter-active');
    callApiWithQuery({ filter: event.target.name });
  }
});

PAGES_LIST.addEventListener('click', event => {
  event.preventDefault();

  if (
    event.target.tagName === 'BUTTON' &&
    event.target.classList.contains('pg-num-btn')
  ) {
    document.querySelectorAll('.pg-num-btn').forEach(button => {
      button.classList.remove('pg-num-btn-active');
    });

    event.target.classList.add('pg-num-btn-active');
    GALLERY.innerHTML = '';
    callApiWithQuery({ filter: MUSCLES_BUTTON.name, page: event.target.id });
  }
});

async function callApiWithQuery({ filter, page = 1, limit = 12 }) {
  try {
    const renderExercises = await getExercisesData({ filter, page, limit });
    const quantityBtnPgs = () => {
      const totalPages = renderExercises.data.totalPages;
      let markupBtnPgs = '';
      for (let i = 1; i <= totalPages; i++) {
        markupBtnPgs += `<button id="${i}" class="pg-num-btn" type="button" name="${filter}">${i}</button>`;
      }
      return markupBtnPgs;
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
    const markupBtnPgs = quantityBtnPgs();

    PAGES_LIST.innerHTML = markupBtnPgs;
    GALLERY.innerHTML = imgs;
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: error.message,
      color: 'red',
      position: 'topCenter',
    });
  }
}
