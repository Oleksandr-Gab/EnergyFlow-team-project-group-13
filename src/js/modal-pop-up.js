import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



const exerciseModal = document.getElementById('exerciseModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const addToFavoritesBtn = document.getElementById('addToFavoritesBtn');
const giveRatingBtn = document.getElementById('giveRatingBtn');
const exerciseInfo = document.getElementById('information');
let id;



// --- Відкриття модалки
 export function openModal() {
    exerciseModal.classList.add('open');
    closeModalBtn.addEventListener('click', closeModal);
    document.addEventListener('mouseup', outsideClick);
     document.addEventListener('keydown', escapeKey);

     


document.body.style.overflow = 'hidden';


    
       


    // Выкликаємо функцію cardClick і динамічно додаємо данні
    cardClick().then(exerciseData => {

        const { gifUrl, name, rating, target, bodyPart, equipment, popularity, burnedCalories, description } = exerciseData;
              
        exerciseInfo.innerHTML = `
            <img src="${gifUrl}" alt="${name}">
            <h2>${name}</h2>
            <p>Rating: ${rating}</p>
            <p>Target: ${target}</p>
            <p>Body Part: ${bodyPart}</p>
            <p>Equipment: ${equipment}</p>
            <p>Popular: ${popularity}</p>
            <p>Burned Calories: ${burnedCalories}</p>
            <p>Description: ${description}</p>
        `;
    }).catch(error => {
        iziToast.error({
            title: 'Error',
            message: 'Sorry. Please try again!',
            position: 'topRight',
        });
    })
}

    // --- Закриття модалки 
    function closeModal() {
        exerciseModal.classList.remove('open');
        closeModalBtn.removeEventListener('click', closeModal);
        document.removeEventListener('mouseup', outsideClick);
        document.removeEventListener('keydown', escapeKey);
        
        document.body.style.overflow = '';
        
        
    
        
    }

// --- Кліки по бєкдропу та esc
    
   const outsideClick = function (event) {
    const container = document.getElementById('modal');
    if (!container.contains(event.target) && exerciseModal.classList.contains('open')) {
        closeModal();
    }
};


   const escapeKey = function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
};



    // --------- Зчитуємо айді картки на яку натискаємо та отримуємо інфо з АПІ

// ----- exerciseCard - майбутня li з карткою

    async function cardClick(id) {
  return fetchData(id);
}

    // --- Функція отримання данних

    async function fetchData(id) {
        const EXERCISES_ID_URL = `https://energyflow.b.goit.study/api/exercises/${id}`;

        try {
            const response = await axios.get(EXERCISES_ID_URL);
            const data = response.data;
            return data;

        } catch (error) {
            iziToast.error({
                title: 'Error',
                message: 'Error fetching exercise data: ',
                position: 'topRight',
            })

            throw error;
        }
    }