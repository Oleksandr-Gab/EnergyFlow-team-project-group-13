import axios from 'axios';
import iziToast from 'izitoast';
import TypeIt from "typeit";
import 'izitoast/dist/css/iziToast.min.css';
const quoteContainer = document.querySelector('.quote-info')
const QUOTE_DATA_STORAGE = 'quote-of-the-day';
const DATE_STORAGE = "date"
const quoteDate = new Date()
const dayOfMonth = quoteDate.getDate()
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


//! SAVE QUOTE AND DATA
function saveQuoteAndData(data, day) {
    localStorage.setItem(QUOTE_DATA_STORAGE, JSON.stringify(data));
    localStorage.setItem(DATE_STORAGE, day);
}

//! RENDER QUOTE
function renderQuote(data) {
    const dataArray = [data];
    quoteContainer.innerHTML = dataArray.reduce((acc, { quote, author }) =>
        acc +
        `<p class="quote-text">${quote}</p>
        <h3 class="quote-author">${author}</h3>`, '');
}


//! CHECK DAY AND GET NEW QUOTE
async function checkDay() {
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

checkDay();

//! ANIMATION 
new TypeIt(".quote-info", {
    speed: 26,
    startDelay: 300,
    waitUntilVisible: true,
    afterComplete: function (instance) {
        instance.destroy();
      }
  }).go();

  new TypeIt("#motivation-txt", {
    speed: 26,
    startDelay: 300,
    waitUntilVisible: true,
    afterComplete: function (instance) {
        instance.destroy();
      }
  }).go();