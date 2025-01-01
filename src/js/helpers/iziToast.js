import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function successResult(message) {
  iziToast.success({
    position: 'topCenter',
    icon: 'icon-izi-toast',
    title: 'OK!',
    titleSize: '20px',
    message: message,
    messageSize: '20px',
    titleColor: '7e847f',
    messageColor: 'black',
    backgroundColor: '#a6b0b0bd',
    layout: 1,
    theme: 'light',
    timeout: 5000,
  });
}

function errorResult(message) {
  iziToast.error({
    position: 'topCenter',
    icon: 'icon-izi-toast',
    title: 'Upps!',
    titleSize: '20px',
    message: message,
    messageSize: '20px',
    titleColor: '7e847f',
    messageColor: 'black',
    backgroundColor: '#red',
    layout: 1,
    theme: 'light',
    timeout: 5000,
  });
}

function messageInfo(message) {
  iziToast.info({
    position: 'topCenter',
    icon: 'icon-izi-toast',
    title: '',
    titleSize: '20px',
    message: message,
    messageSize: '20px',
    titleColor: '7e847f',
    messageColor: 'black',
    backgroundColor: '#a6b0b0bd',
    layout: 1,
    theme: 'light',
    timeout: 5000,
  });
}

export { successResult, errorResult, messageInfo };
