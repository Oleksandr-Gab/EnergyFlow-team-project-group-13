import axios from 'axios';

import { errorResult, messageInfo, successResult } from './helpers/iziToast.js';

import {
  closeModalPop,
  modallResponseData,
  renderCard,
} from './modal-pop-up.js';
import { validateEmail } from './helpers/validateEmail.js';

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
  document.addEventListener('mouseup', outsideClick);
  document.addEventListener('keydown', escapeKey);
}

function closeModal() {
  modalForm.classList.remove('is-open');
  closeModalBtn.removeEventListener('click', closeModal);
  form.removeEventListener('submit', handleSubmit);
  starsContainer.removeEventListener('click', handleClickOnStar);
  document.removeEventListener('mouseup', outsideClick);
  document.removeEventListener('keydown', escapeKey);
  form.reset();
  rateValue.innerHTML = '0.0';
  renderCard(modallResponseData);
}

// --- Кліки по бєкдропу та esc

const outsideClick = function (event) {
  const container = document.querySelector('.rating-modal-wrapper');
  if (
    !container.contains(event.target) &&
    modalForm.classList.contains('is-open')
  ) {
    closeModal();
  }
};

const escapeKey = function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
};

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

  if (!validateEmail(email)) return;

  if (rate == 0 || review === '') {
    messageInfo('Fill in the fields');
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
