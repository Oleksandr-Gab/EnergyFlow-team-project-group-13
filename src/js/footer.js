import axios from 'axios';

const footerform = document.querySelector('.footer-form')

footerform.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const footerEmailValue = event.currentTarget.elements.footerInput.value.trim();
   
    axios.post('https://energyflow.b.goit.study/api/subscription', {
        email: footerEmailValue
    })
    .then(response => {
        if (response.status >= 200 && response.status < 300 ) {
            iziToast.success({
            title: 'OK',
                message: 'Successfully inserted record!',
                color: 'white'
        });
        }
    })
        .catch(error => {
        iziToast.error({
            title: 'Error',
            message: 'Error sending subscription request',
        });
    });
}