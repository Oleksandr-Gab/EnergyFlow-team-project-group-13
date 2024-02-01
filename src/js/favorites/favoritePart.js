import axios from 'axios';
import iziToast from 'izitoast';
import TypeIt from "typeit";
import 'izitoast/dist/css/iziToast.min.css';
import iconURL from '../../img/sprite.svg';

// import { checkDay } from '../quote-of-the-day';
// import { checkDay } from '../quote-of-the-day';
import { activeModalBtn } from '../modal-pop-up';

const favoriteInfo = "<img class='favoritePart-img' src='./img/dumbbell.svg' alt=''> <p class='favoritePart-text'>It appears that you havent added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";
const favoritePartInfo = document.querySelector('.favoritePartInfo');
const savedFavorites = localStorage.getItem('favoritesCard');
const quoteFavContainer = document.querySelector('.quote-fav-info');
const QUOTE_DATA_STORAGE = 'quote-of-the-day';
const DATE_STORAGE = "date"
const quoteDate = new Date()
const dayOfMonth = quoteDate.getDate()

let arrFavorite;


async function getQuoteResponse() {
  try {
  const quoteApi = axios.create({
      baseURL: 'https://energyflow.b.goit.study/api',

  });
      const responseQuote = await quoteApi.get('/quote'); 
      const quoteResponseData = responseQuote.data
      renderQuote(quoteResponseData);
      saveQuoteAndData(quoteResponseData, dayOfMonth)
      
      
} catch (error) {
iziToast.error({
    timeout: 5000,
    title: "Error",
    message: error.message,
    position: 'topRight',
  });
}
}

checkDay();

//! SAVE QUOTE AND DATA
function saveQuoteAndData(data, day) {
  localStorage.setItem(QUOTE_DATA_STORAGE, JSON.stringify(data));
  localStorage.setItem(DATE_STORAGE, day);
}

//! RENDER QUOTE
function renderQuote(data) {
  const dataArray = [data];
  quoteFavContainer.innerHTML = dataArray.reduce((acc, { quote, author }) =>
      acc +
      `<p class="quote-text">${quote}</p>
      <h3 class="quote-author">${author}</h3>`, '');
}


//! CHECK DAY AND GET NEW QUOTE
export async function checkDay() {
  const storedDate = localStorage.getItem(DATE_STORAGE);
if (isNaN(storedDate)) {
   iziToast.error({
    timeout: 5000,
    title: "Error",
    message: error.message,
    position: 'topRight',
   });
  return;
}
if (parseInt(storedDate) === dayOfMonth) {
      const storedQuoteData = localStorage.getItem(QUOTE_DATA_STORAGE);
      if (storedQuoteData) {
          const parsedData = JSON.parse(storedQuoteData);
          renderQuote(parsedData);
      }
      return;
  }
  await getQuoteResponse();
  localStorage.setItem(DATE_STORAGE, dayOfMonth.toString());
}




new TypeIt("#fan-quote", {
  speed: 26,
  startDelay: 300,
  waitUntilVisible: true,
  afterComplete: function (instance) {
      instance.destroy();
    }
}).go();


function saveExercises() {
  if (savedFavorites != null) {
    arrFavorite = JSON.parse(savedFavorites);
      try {
        favoritePartInfo.innerHTML = ' ';
        renderFavorites(arrFavorite);
      } catch (error) {
        iziToast.error({
          message: "Error, query. repeat the request.",
          color: 'red',
          position: 'topCenter',
        });
      }
  } else {
      favoritePartInfo.insertAdjacentHTML('afterbegin', favoriteInfo);
  }
}

async function renderFavorites(arr) {
  let favCard = arr.reduce(
      (html, { burnedCalories, name, bodyPart, time, target, _id }) =>
        html +
        `<li class="fav-gallery-card">
      <div class="header-card">
        <div class="fav-titel-card">  
          <div class="workout">WORKOUT</div>
            <div class="trash">
              <svg class="icon-trash" width="16" height="16">
                <use href="${iconURL}#trash"></use>
              </svg>
            </div>
          </div>

        <div class="workout-btn-container" data-action="right">
          <button class="workout-btn" id="${_id}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="${iconURL}#icon-right"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="${iconURL}#run"></use>
              </svg>
          </div>
          <h3>${name}</h3>
      </div>
      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${burnedCalories}/${time}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${bodyPart}</li>
            <li class="target"><span class="params-text">Target:</span> ${target}</li>
      </ul>
    </li>`,
      ''
    )
    favoritePartInfo.innerHTML = favCard;
  activeModalBtn();
}


saveExercises();

// actBtnTrash();
// // deleteToFavorite



// const actBtnTrash = () => {
//     const btnsTrash = document.querySelectorAll(".trash");
//     btnsTrash.forEach(el => console.log(el))
//     //   el.addEventListener('click'), event => 
//     // console.log(event));


//     favoritePartInfo.addEventListener('click', event => {
//     event.preventDefault();
//     console.log(event.currentTarget.id);
//   })
   
// }

