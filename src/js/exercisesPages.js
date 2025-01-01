import axios from 'axios';
import { errorResult } from './helpers/iziToast';

const exercisesSectionContainer = document.querySelector('.search-block');
const renderBtnListElement = document.querySelector('.custom-pagination-btn');
const paginationButtons = document.querySelectorAll('.render-pagination-btn');

const axiosInstance = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api/',
});

// отримання фільтрів
const apiService = {
  fetchFilters: async queryParams => {
    try {
      const response = await axiosInstance.get('filters', {
        params: queryParams,
      });
      return response.data.results;
    } catch (error) {
      errorResult('An error occurred while fetching data from the API.');
    }
  },
};

// HTML для фільтрів
const generateFilterMarkup = async queryParams => {
  try {
    // Виклик API для отримання фільтрів та генерація HTML-розмітки
    const data = await apiService.fetchFilters({ ...queryParams });
    return data.map(generateFilterItemHTML).join('');
  } catch (error) {
    errorResult('An error occurred while fetching data from the API.');
  }
};

// HTML для одного елемента фільтра
const generateFilterItemHTML = filterItem => {
  return `<li class="render-page-one-item" data-name="${filterItem.name}">
            <img src="${filterItem.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${filterItem.name}</p>
              <p class="render-page-one-item-zones">${filterItem.filter}</p>
            </div>
          </li>`;
};

// Рендер першої сторінки
const renderPageOneContent = async markup => {
  try {
    // Рендер HTML-розмітки в контейнер для вправ
    const renderedMarkup = await markup;
    exercisesSectionContainer.innerHTML = renderedMarkup;
  } catch (error) {
    errorResult('An error occurred while rendering data.');
  }
};

// Оновлення кнопок і видимості при пагінації
const updateButtonValuesAndVisibility = target => {
  const btnIncrement = parseInt(target.dataset.btn) === 3 ? 1 : -1;
  paginationButtons.forEach(button => {
    button.textContent = parseInt(button.textContent) + btnIncrement;
  });

  paginationButtons[0].style.display = params.page > 1 ? 'block' : 'none';
  paginationButtons[2].style.display =
    params.page >= btnActive - 1 ? 'none' : 'block';
};

const handlePaginationButtonClick = event => {
  if (event.target.nodeName === 'BUTTON') {
    // рендер першої сторінки
    params.page = parseInt(event.target.textContent);
    renderPageOneContent(generateFilterMarkup(params));
    updateButtonValuesAndVisibility(event.target);
  }
};

// ширина екрану і кількості елементів на сторінці
const bodyWidth = getComputedStyle(document.querySelector('body')).width;
const itemsPerPage = bodyWidth < 768 ? 8 : 12;
const params = {
  limit: itemsPerPage,
  page: 1,
};
const btnActive = 69 / itemsPerPage;

// обробник подій для кнопок пагінації
renderBtnListElement.addEventListener('click', handlePaginationButtonClick);
