import axios from 'axios';

import { errorResult, successResult } from './helpers/iziToast';
import { validateEmail } from './helpers/validateEmail';

const footerform = document.querySelector('.footer-form');
const footerInput = document.querySelector('.footer-form-input');

const baseURL = 'https://energyflow.b.goit.study/api/subscription';

footerform.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const footerEmailValue =
    event.currentTarget.elements.footerInput.value.trim();

  if (!validateEmail(footerEmailValue)) return;

  try {
    const response = await axios.post(baseURL, {
      email: footerEmailValue,
    });

    if (response.status >= 200 && response.status < 300) {
      const successMessage = response.data.message;
      successResult(successMessage);
    } else {
      throw new Error();
    }
  } catch (error) {
    errorResult(error.response.data.message);
  } finally {
    footerInput.value = '';
  }
}
