

const favoritePartInfo = document.querySelector('.favoritePartInfo');

const savedFavorites = localStorage.getItem("favorite");



favoritePartInfo.innerHTML = "<img class='favoritePart-img' src='img/dumbbell.svg' alt=''><p class='favoritePart-text'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";
