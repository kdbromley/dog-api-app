
function generateDogImagesElement(image) {
    return `<img src="${image}" class="dog-pic">`
}

function generateDogImagesString(imageUrls) {
    const imageGroup = imageUrls.map((image) => generateDogImagesElement(image));
    return imageGroup.join("");
}

function renderDogImages(responseJson, requestedNumber) {
    $('.display-results').removeClass('hidden');
    const imageUrls = responseJson.message;
    const dogImagesString = generateDogImagesString(imageUrls);
    $('.img-results').html(dogImagesString);
}

function getDogImages(requestedNumber) {
    fetch(`https://dog.ceo/api/breeds/image/random/${requestedNumber}`)
        .then(response => response.json())
        .then(responseJson => {
            renderDogImages(responseJson, requestedNumber);
            console.log(responseJson.message);
        })
        .catch(error => alert('Uh oh! Something went wrong. Please try again.'));
}


function handleSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        const requestedNumber = $('input').val();
        $('input').val("3");
        getDogImages(requestedNumber);
    })
}



$(function() {
    handleSubmit();
})