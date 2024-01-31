import { renderExercises } from './js/exercisesWaist';

const favoritePartInfo = document.querySelector('.favoritePartInfo');
const savedFavorites = localStorage.getItem('favoritesCard');
const arrFavorite = [];


 const favoriteInfo = `
 '<img class="favoritePart-img" src="./img/dumbbell.svg" alt="">',
 '<p class="favoritePart-text">It appears that you havent added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`;

function saveExercises() {
  if (saveExercises != null) {
    console.log("dddddd");
    arrFavorite = JSON.parse(savedFavorites);
    console.log(arrFavorite);
  } else {
      favoritePartInfo.innerHTML = favoriteInfo;
  }
}



// saveExercises();