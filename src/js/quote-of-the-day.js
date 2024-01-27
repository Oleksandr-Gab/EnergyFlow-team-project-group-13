// 1.Отримання даних з бека
// 2. Зберігати ці дані в localStorage
// 3. Перевірка дати, якщо дата змінилася робити запит на бек та підставляти нову quote ^_^
//  Якщо дата не змінилася робити запит на бекенд не потрібно
import axios from 'axios';
const quoteContainer = document.querySelector('.quote-info')


async function getQuoteResponse() {
    try {
    const quoteApi = axios.create({
        baseURL: 'https://energyflow.b.goit.study/api'
    });
        const responseQuote = await quoteApi.get('/quote'); 
    renderQuote(responseQuote.data);
} catch (error) {
  console.error("SOMETHING WENT WRONG", error);
}
}




//! RENDER QUOTE
function renderQuote(data) {
    const dataArray = [data];
    quoteContainer.innerHTML = dataArray.reduce((acc, { quote, author }) =>
        acc +
        `<p class="quote-text">${quote}</p>
        <h3 class="quote-author">${author}</h3>`, '');
}

getQuoteResponse()