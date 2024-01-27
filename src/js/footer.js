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

