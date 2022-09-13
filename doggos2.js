const ALLBREEDS_URL = "https://dog.ceo/api/breeds/list/all";    // URL where we will be getting data from

function fetchDoggoList() {
    fetch(ALLBREEDS_URL)

        .then(function (response){                              //then run this function when you get a response from the server
            return response.json();                             //we need to let the function know what it will get back
        })
        .then(function (data) {                                 // 'data' doesn't need to be declared because response gets injected into next function, that's how fetch works
        
            const breedSelectList = Object.keys(data.message);
            
            for (let i = 0; i < breedSelectList.length; i++) {
                const option = document.createElement('option');
                option.text = breedSelectList[i];
                option.value = breedSelectList[i];
                
                document.querySelector('select').appendChild(option); 
            }            
        })
}

function fetchDoggoImage() {
    
    selectedBreed = document.getElementById('breed-select').value;
    console.log('https://dog.ceo/api/breed/' + selectedBreed + '/images/random');
    // create specific url for RANDOM...
    const RANDOMBREEDIMAGE_URL = 'https://dog.ceo/api/breed/' + selectedBreed + '/images/random'

    fetch(RANDOMBREEDIMAGE_URL)
        .then(function (response) {
            return response.json();
        })
        .then (function (data) {
            const img = document.createElement('img');       // ceating an img tag in the DOM
            img.src = data.message;                          // setting the src on the img tag to the message from fetch
            img.alt = 'Picture of a cute' + selectedBreed;   // setting the alt text for img tag
            
            document.querySelector('#loading-img')
                .remove();
    
            document.querySelector('.doggos')
                .appendChild(img);                                  // appending the tag under the div with class doggo
        })
        

}

function getOption() {
    selectedBreed = document.getElementById('breed-select').value;
    console.log(selectedBreed);
}

function loadingImg() {
    const loadingImg = document.createElement('img');
    loadingImg.src = '/home/mitn/Desktop/codeFiles/frontEndMasters/bootcamp/AJAXPractice/img/image_processing20200701-12577-15bg800.gif';
    loadingImg.id = 'loading-img';
    loadingImg.alt = 'Loading...';
    document.querySelector('.doggos')
        .appendChild(loadingImg);
}

function addDoggo() {
    loadingImg();
    fetchDoggoImage();
    //getOption();
}
    
document.querySelector('.add-doggo')
    .addEventListener("click", addDoggo); // appends pictures, does not replace picture. runs addDoggo again, so that means runs the fetch again when button is clicked, page does not need reload

fetchDoggoList();

console.log("which will run first?");  // this ends up running first because the fetch takes time
