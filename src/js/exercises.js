import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let filter;

// ---------------------------------------------------------
const gallery = document.querySelector('.cards-container');
// ---------------------------------------------------------
const BASE_URL = new URL('https://energyflow.b.goit.study/api/filters?');

BASE_URL.searchParams.append('filter', 'Muscles');
// BASE_URL.searchParams.append('equipment', 'Equipment');

const fetchExercises = async () => {
  const exercises = await axios.get(BASE_URL);

  return exercises.data;
};

fetchExercises()
  .then(response => {
    console.log(response.results[0].name);
  })
  .catch(error => {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  });

function renderExercises(arr) {
  gallery.insertAdjacentHTML(
    'afterbegin',
    arr.reduce((html, {}) => html + ``),
    ''
  );
}
