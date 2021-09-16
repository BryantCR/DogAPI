console.log("working");

function grapInfo( event ){
    event.preventDefault();

    let currentNumber = event.target.numOfDogs.value;
    console.log(currentNumber);
}

let dogForm = document.querySelector("#dogForm");
dogForm.addEventListener('submit', grapInfo );
