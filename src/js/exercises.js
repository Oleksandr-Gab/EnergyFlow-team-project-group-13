'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const FILTER_LIST = document.querySelector('.FilterList');
let filterExercises;
const GALLERY = document.querySelector('.Gallery');

//button MUSCLES active by default
const MUSCLES_BUTTON = document.querySelector('button[name="Muscles"]');
MUSCLES_BUTTON.disabled = false;

//делегування слухача на FILTER_LIST
FILTER_LIST.addEventListener('click', event => {
  //очищення всіх попередних елементів у розмітці gallery перед новим пошуком
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

// Function to call the API with the selected filterExecises
async function callApiWithQuery(filter) {
  const API = axios.create({
    baseURL: 'https://energyflow.b.goit.study/api',
    params: {
      filter: filter,
      page: '1',
      limit: '12',
    },
  });
  const renderImgs = await API.get('/filters');
  console.log(renderImgs);
  const imgs = renderImgs.data.results.reduce(
    (html, { name, filter, imgUrl }) =>
      html +
      `<li class="GalleryItem">
           <div class="Card">
            <a class="GalleryLink" href="${imgUrl}">
             <img class="GalleryImage"
             src="${imgUrl}"
             alt="${filter}"
             />
            </a>
            </div>
            <div class="CardDescription">
            <p class="NameDescription">${name}</p>
            <p class="FilterDescription">${filter}</p>
            </div>
          </li>`,
    ''
  );
  GALLERY.insertAdjacentHTML('beforeend', imgs);

  //   API.get('/filters')
  //     .then(response => {
  //       console.log(response.results);
  //       const IMGS = response.results.reduce(
  //         (html, { name, filter, imgUrl }) =>
  //           html +
  //           `<li class="GalleryItem">
  //          <div class="Card">
  //           <a class="GalleryLink" href="${imgUrl}">
  //            <img class="GalleryImage"
  //            src="${imgUrl}"
  //            alt="${filter}"
  //            />
  //           </a>
  //           </div>
  //           <div class="CardDescription">
  //           <p class="NameDescription">${name}</p>
  //           <p class="FilterDescription">${filter}</p>
  //           </div>
  //         </li>`,
  //         ''
  //       );

  //   GALLERY.insertAdjacentHTML('beforeend', IMGS);
  // })
  // .catch(error => {
  //   console.error(error);
  //   iziToast.error({
  //     message: error.message,
  //     color: 'red',
  //     position: 'topCenter',
  //   });
  // });
}
