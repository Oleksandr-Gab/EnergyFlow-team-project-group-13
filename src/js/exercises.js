import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//HELLO

const FILTER_LIST = document.querySelector('.filter-list');
const GALLERY = document.querySelector('.gallery');
const PAGES_LIST = document.querySelector('.pagination-btn');
const WAIST = document.querySelector('.waist');

export const API_BASE_URL = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});

export let exercisesData;

const MUSCLES_BUTTON = document.querySelector('button[name="Muscles"]');

document.addEventListener('DOMContentLoaded', async () => {
  await callApiWithQuery({ filter: 'Muscles' });

  //відображати активні кнопки

  MUSCLES_BUTTON.classList.add('filter-active');
  let pagesButton = document.querySelector('.pg-num-btn');
  console.log(pagesButton);
  // pagesButton.classList.add('pg-num-btn-active');
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

  //очищення карток та сторінок

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
  // гортання сторінок
  if (event.target.tagName === 'BUTTON') {
    PAGES_LIST.innerHTML = '';
    GALLERY.innerHTML = '';

    //виклик ф-ції з обраним користувачем фільтром та сторінкою
    callApiWithQuery({
      filter: event.target.name,
      page: event.target.id,
    });
  }
});

// генерація розмітки

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
        `<li class="gallery-item" >
          <div class="card" >
             <img class="gallery-image"
             src="${imgUrl}"
             alt="${filter}"
            />
            </div>
            <div class="card-description">
            <p class="name-description" id="${filter}:${name}">${name}"</p>
            <p class="filter-description">${filter}</p>
            </div>
          </li>`,
      ''
    );

    /* var.2
    передача через id объекта параметров выбранного фильтра
    <p class="name-description" id='${JSON.stringify({filter, name, })}'>${name}</p>
    */

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
