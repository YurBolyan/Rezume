// N js
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('#client-1').attr('src', 'images/clients/client_1_dark.png').css({filter: 'initial'});
    $('#client-2').attr('src', 'images/clients/client_2_dark.png').css({filter: 'initial'});
    $('#client-5').attr('src', 'images/clients/client_5_dark.png').css({filter: 'initial'});
    $('#client-8').attr('src', 'images/clients/client_8_dark.png').css({filter: 'initial'});
}


const forms = document.querySelector('#cform');
console.log(forms);

const message = {
    loading: "Loading...",
    success: "Success!",
    failture: "Failture!"
}
function postData(form) {
    form.addEventListener('submit', function(event){
        event.preventDefault();
        let statusMessage = document.createElement('p');
        statusMessage.textContent = message.loading;
        form.insertAdjacentElement('afterend', statusMessage);
        const formData = new FormData(form);
        fetch('mail.php', {
            method: 'POST',
            body: formData
        })
        .then(gettedJson => gettedJson.text())
        .then(gettedData => {
            statusMessage.textContent = message.success;
            console.log(gettedData);
        })
        .catch(() => {
            statusMessage.textContent = message.failture
        })
        .finally(() => {
            form.reset();
        })
    });
}
postData(forms)