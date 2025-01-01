import { errorResult, messageInfo } from './iziToast';

export const validateEmail = email => {
  if (email === '') {
    messageInfo('Please enter your email!');
    return;
  }
  const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (!pattern.test(email)) {
    errorResult('Please give us a valid email.');
    return;
  }
  return pattern.test(email);
};
