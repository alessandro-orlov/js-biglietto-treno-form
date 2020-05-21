// Passenger FORM data
var formName = document.getElementById('form-name');
var distanceByTrain = document.getElementById('distance-by-train');
var ageDiscount = document.getElementById('age-discount');
//Evet buttons
var generateTicketButton = document.getElementById('generate-ticket-button');
var resetFormButton = document.getElementById('reset-form');

//Ticket fields
var ticketName = document.getElementById('ticket-name');
var showDiscound = document.getElementById('discount');
var carriage = document.getElementById('carriage');
var codeCp = document.getElementById('code-cp');
var finalPrice = document.getElementById('ticket-price');


//Event that generate ticket output
generateTicketButton.addEventListener('click',
  function() {
    // Passenger Name
    ticketName.innerHTML = formName.value;

    //Show applied discount
    showDiscound.innerHTML = ageDiscount.value

    //generate random carriage number
    carriage.innerHTML = Math.floor(Math.random() * 46);

    //generate random codeCP
    codeCp.innerHTML = Math.floor(Math.random() * 100001);

    //Ticket price calculations
    var ticketPrice = distanceByTrain.value * .21;
    console.log(ticketPrice)
    if(ageDiscount.value == 'junior') {
      ticketPrice = ticketPrice - (ticketPrice * 0.2);
    } else if (ageDiscount.value == 'senior') {
      ticketPrice = ticketPrice - (ticketPrice * 0.4);
    }

    //Show final price
    finalPrice.innerHTML = ticketPrice + '€';
  }
);

//Event that reset Form
resetFormButton.addEventListener('click',
  function() {
    //reset fields (Passenger Name) for form and ticket
    formName.value = '';
    ticketName.innerHTML = '';

    //reset showDiscound
    showDiscound.innerHTML = '';

    //reset fields distanceByTrain in the form & price in the ticket
    distanceByTrain.value = '';
    finalPrice.innerHTML = '';

    //Code & code-cp reset
    carriage.innerHTML = '';
    codeCp.innerHTML = '';

    //reset ageDiscount field
    ageDiscount.value = 'standard';
  }
)
