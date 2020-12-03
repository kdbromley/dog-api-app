function getDogImages(requestedNumber) {
    fetch(`https://dog.ceo/api/breeds/image/random/${requestedNumber}`)
        .then(response => response.json())
        .then (responseJson => displayDogImages(responseJson, requestedNumber))
        .catch(error => alert('Uh oh! Something went wrong. Please try again.'));
}

function displayDogImages(responseJson, requestedNumber) {
    for (let i = 0; i < requestedNumber; i++) {
        $('.img-results').append(`<img src="${responseJson.message[i]}">`);
    }
}


function handleSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        const requestedNumber = $('input').val();
        getDogImages(requestedNumber);
    })
}



$(function() {
    handleSubmit();
})