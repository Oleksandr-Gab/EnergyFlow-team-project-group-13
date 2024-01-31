import { renderExercises } from './exercisesWaist.js';


const favoritePartInfo = document.querySelector('.favoritePartInfo');
const savedFavorites = localStorage.getItem("favorite");

 const favoriteInfo = [
 '<img class="favoritePart-img" src="./img/dumbbell.svg" alt="">',
 '<p class="favoritePart-text">It appears that you havent added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>'
 ];

 favoritePartInfo.innerHTML = favoriteInfo.join(' ');









function saveExercises() {
  const savingFavoritesData =
    JSON.parse(localStorage.getItem('favoritesCard')) || [];
  const markup = savingFavoritesData.map(renderExercises).join('');
  if (savingFavoritesData.length !== 0) {
    list.firstElementChild.style.display = 'none';
  }

  list.insertAdjacentHTML('beforeend', markup);
}
saveExercises();


function deleteFavorite(evt) {
  console.log(evt.target.parentNode.parentNode);
  if (!evt.target.parentNode.parentNode.classList.contains('js-btn-removeBTN')) {
    return;
  }
  const data = JSON.parse(localStorage.getItem('favoritesCard')) || [];
  const filteredData = data.filter(
    exercise => exercise._id !== evt.target.parentNode.parentNode.id
  );
  evt.target.parentNode.parentNode.parentNode.remove();
  localStorage.setItem('favoritesCard', JSON.stringify(filteredData));
  console.log(filteredData);
  if (filteredData.length === 0) {
    list.firstElementChild.style.display = 'block';
  }
}