function getDogImages(requestedNumber) {
    fetch(`https://dog.ceo/api/breeds/image/random/${requestedNumber}`)
        .then(response => response.json())
        .then (responseJson => console.log(responseJson.message))
        .catch(error => alert('Uh oh! Something went wrong. Please try again.'));
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