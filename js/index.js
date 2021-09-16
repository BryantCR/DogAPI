console.log("working");

function fetchDogs( num ){
    let url = `https://dog.ceo/api/breeds/image/random/${num}`;
    let settings = {
        method: "GET"
    }
    console.log(1);
    fetch( url, settings)
        .then(function(response){
            console.log(response);
            console.log(2);
            return response.json();
        })
        .then(function(data){
            console.log(data);
        
            for(let i = 0; i < data.message.length; i ++){
                let result = document.querySelector('.results');
                result.innerHTML += `
                <div>
                <img src="${data.message[i]}" class"size" ></img>
                </div>
                `;
            }
        });
        console.log(3);
}

function grapInfo( event ){
    event.preventDefault();

    let currentNumber = event.target.numOfDogs.value;
    console.log(currentNumber);
    fetchDogs( currentNumber );
}

let dogForm = document.querySelector("#dogForm");
dogForm.addEventListener('submit', grapInfo );
