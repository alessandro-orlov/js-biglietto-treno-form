// Passenger FORM data
var formName = document.getElementById('form-name');
var distanceByTrain = document.getElementById('distance-by-train');
var ageDiscount = document.getElementById('age-discount');

//Undefind (for now) variables
var ageDiscountValue;

//Ticket fields
var ticketName = document.getElementById('ticket-name');
var ticketPrice = document.getElementById('ticket-price');
var carriage = document.getElementById('carriage');
var codeCp = document.getElementById('code-cp');

var ticketPrice = distanceByTrain.value * 0.21;
console.log(ticketPrice);

//button
var generateTicketButton = document.getElementById('generate-ticket-button');
var resetFormButton = document.getElementById('reset-form');

//Event that generate ticket output
generateTicketButton.addEventListener('click',
  function(){
    // Passenger Name
    ticketName.innerHTML = formName.value;

    //generate random carriage number
    carriage.innerHTML = Math.floor(Math.random() * 46);

    //generate random code CP
    codeCp.innerHTML = Math.floor(Math.random() * 100001);

    //Price
    // ticketPrice.innerHTML = (distanceByTrain.value * 0.21).toFixed(2);
    // if( ageDiscount.value == 'junior' ) {
    //   ticketPrice.innerHTML = ticketPrice - (distanceByTrain.value * 0.21).toFixed(2);
    // }
  }
);

//Event that reset Form
resetFormButton.addEventListener('click',
  function() {
    //reset fields (Passenger Name) for form and ticket
    formName.value = '';
    ticketName.innerHTML = '&nbsp;';

    //reset fields distanceByTrain in the form & price in the ticket
    distanceByTrain.value = '&nbsp;';
    ticketPrice.innerHTML = '&nbsp;';

    //Code & code-cp reset
    carriage.innerHTML = '&nbsp;';
    codeCp.innerHTML = '&nbsp;';

    //reset ageDiscount field
    ageDiscount.value = 'standard';
  }
)
