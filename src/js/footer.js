import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const footerform = document.querySelector('.footer-form');
const footerInput = document.querySelector('.footer-form-input');

const baseURL = 'https://energyflow.b.goit.study/api/subscription';

footerform.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    
    const footerEmailValue = event.currentTarget.elements.footerInput.value.trim();
    if (!validateEmail(footerEmailValue)) {
        return messageValidEmail();
    }; 

    
    try {
        const response = await axios.post(baseURL, {
            email: footerEmailValue
        });

        if (response.status >= 200 && response.status < 300) {
            const successMessage = response.data.message;
            iziToast.success({
                title: 'OK',
                message: successMessage,
                color: 'white',
                position: 'center'
            });
            
        } else {
            throw new Error();
        }

    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: error.response.data.message,
            position: 'center',
            backgroundColor: 'gray',
        });
    } finally {
        footerInput.value = ''
    }
}




const validateEmail = (email) => {
    const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return pattern.test(email);
}

const messageValidEmail = () => {
    iziToast.info({
        title: '',
        message: "Please give us a valid email.",
        color: 'white',
        position: 'center'
    });
}