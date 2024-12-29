import axios from 'axios';

import { errorResult, successResult } from './services/iziToast.js';

import {
  closeModalPop,
  modallResponseData,
  renderCard,
} from './modal-pop-up.js';

const giveRatingBtn = document.getElementById('giveRatingBtn');
const modalForm = document.querySelector('.js-backdrop-modal');
const closeModalBtn = document.querySelector('.js-rating-close');
const form = document.querySelector('.js-rating-form');
const rateValue = document.querySelector('.js-rating-data');
const starsContainer = document.querySelector('.js-stars-list');
const submitBtn = document.querySelector('.js-raiting-submit');

// -------- Екземпляр AXIOS ------------------------------------
const axiosRating = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api/exercises/',
});

function openModal() {
  closeModalPop();
  modalForm.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  closeModalBtn.addEventListener('click', closeModal);
  form.addEventListener('submit', handleSubmit);
  starsContainer.addEventListener('click', handleClickOnStar);
}

function closeModal() {
  modalForm.classList.remove('is-open');
  closeModalBtn.removeEventListener('click', closeModal);
  form.removeEventListener('submit', handleSubmit);
  starsContainer.removeEventListener('click', handleClickOnStar);

  renderCard(modallResponseData);
}

export const activeModalBtnForm = () => {
  giveRatingBtn.addEventListener('click', openModal);
};

function handleClickOnStar(event) {
  const rate = form.elements.rating.value;
  !!rate ? (rateValue.innerHTML = rate + '.0') : (rateValue.innerHTML = '0.0');
}

async function handleSubmit(event) {
  event.preventDefault();
  const id = modallResponseData._id;

  const rate = Number(form.elements.rating.value);
  const email = form.elements.email.value.trim();
  const review = form.elements.comment.value.trim();

  const re = /\S+@\S+\.\S+/;

  if (rate === '') {
    errorResult('Please set your estimation!');
    return;
  }
  if (email === '' || !re.test(email)) {
    errorResult('Please enter your email!');
    return;
  }

  if (review === '') {
    errorResult('Please enter your review!');
    return;
  }

  try {
    await axiosRating.patch(`/${id}/rating`, {
      rate,
      email,
      review,
    });
    successResult('Thank you! Your opinion really important for us!');
    form.reset();
    closeModal();
  } catch (error) {
    errorResult(error.message);
  }
}
