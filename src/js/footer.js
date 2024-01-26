const footerform = document.querySelector('.footer-form');

footerform.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    
    const footerEmailValue = event.currentTarget.elements.footerInput.value.trim();
   

    try {
        const response = await axios.post('https://energyflow.b.goit.study/api/subscription', {
        email: footerEmailValue
        })

        iziToast.success({
            title: 'OK',
                 message: 'Successfully inserted record!',
                 color: 'white'
         });
        
        console.log(response.data)
        
    } catch (error) {
        iziToast.error({
                    title: 'Error',
                    message: 'Error sending subscription request',
                });
    }
 
};

