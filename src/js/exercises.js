const FILTER_LIST = document.querySelector('.FilterList');
let filterExercises;
const GALLERY = document.querySelector('.Gallery');

//button MUSCLES active by default
const MUSCLES_BUTTON = document.querySelector('button[name="Muscles"]');
MUSCLES_BUTTON.disabled = false;

//делегування слухача на FILTER_LIST
FILTER_LIST.addEventListener('click', event => {
  // Check if a button was clicked
  if (event.target.tagName === 'BUTTON') {
    filterExercises = event.target.name;
    console.log(filterExercises);
    callApiWithQuery(filterExercises);
  }
});
// axios.defaults базова адреса
// axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';

// const FILTER_URL = `/filters`;

// Function to call the API with the filterExecises
function callApiWithQuery(filter) {
  const API = axios.create({
    baseURL: 'https://energyflow.b.goit.study/api',
    params: {
      filter: filter,
      page: '1',
      limit: '12',
    },
  });

  API.get('/filters')
    .then(response => {
      console.log(response.results);
      const IMGS = response.results.reduce(
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

      GALLERY.insertAdjacentHTML('beforeend', IMGS);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: error.message,
        color: 'red',
        position: 'topCenter',
      });
    });
}
