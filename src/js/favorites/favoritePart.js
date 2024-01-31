import { activeModalBtn } from '../modal-pop-up';
// import { }

const favoritePartInfo = document.querySelector('.favoritePartInfo');
const savedFavorites = localStorage.getItem('favoritesCard');

let arrFavorite;

 const favoriteInfo = `
 '<img class="favoritePart-img" src="./img/dumbbell.svg" alt="">',
 '<p class="favoritePart-text">It appears that you havent added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`;


 saveExercises();

async function saveExercises() {
  if (saveExercises != null) {
    arrFavorite = JSON.parse(savedFavorites);
    console.log(arrFavorite);
    await renderFavorites(arrFavorite);
    activeModalBtn();
  } else {
      favoritePartInfo.innerHTML = favoriteInfo;
      console.log('ssssssssssssss');
  }
}

async function renderFavorites(arr) {
  const { burnedCalories, name, bodyPart, rating, time, target, _id } = arr;
  let favCard = arr.reduce(
      (html, { burnedCalories, name, bodyPart, rating, time, target, _id }) =>
        html +
        `<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${rating}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${_id}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="../img/sprite.svg#icon-right"></use>
            </svg>
            </button>
        </div>
      </div>
      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="../img/sprite.svg#run"></use>
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