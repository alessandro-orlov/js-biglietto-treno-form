// Passenger FORM data
var formName = document.getElementById('form-name');
var distanceByTrain = document.getElementById('distance-by-train');
var ageDiscount = document.getElementById('age-discount');
//Evet buttons
var generateTicketButton = document.getElementById('generate-ticket-button');
var resetFormButton = document.getElementById('reset-form');

//Ticket fields
var ticketName = document.getElementById('ticket-name');
var showDiscount = document.getElementById('discount');
var carriage = document.getElementById('carriage');
var codeCp = document.getElementById('code-cp');
var finalPrice = document.getElementById('ticket-price');
var showTheTicket = document.getElementById('ticket-output')

//Event that generate ticket output
generateTicketButton.addEventListener('click',
  function() {
    //error empty field
    if((formName.value == '') || (distanceByTrain.value == '')) {
      alert('Errore: Non hai compilato tutti i campi!')
    }

    //Show the ticket
    showTheTicket.className = 'visible';

    // Passenger Name
    ticketName.innerHTML = formName.value;

    //Generate random carriage number
    carriage.innerHTML = Math.floor(Math.random() * 41);

    //Generate random codeCP
    codeCp.innerHTML = Math.floor(Math.random() * 100001);

    //Ticket price calculations & Discount message
    var ticketPrice = (distanceByTrain.value * .21).toFixed(2);
    if(ageDiscount.value == 'junior') {
      ticketPrice = (ticketPrice - (ticketPrice * 0.2)).toFixed(2);
      showDiscount.innerHTML = 'Little Noob';
    } else if (ageDiscount.value == 'senior') {
      ticketPrice = (ticketPrice - (ticketPrice * 0.4)).toFixed(2);
      showDiscount.innerHTML = 'Old fart';
    } else if(ageDiscount.value == 'standard') {
      showDiscount.innerHTML = "Just pay"
    }

    if((formName.value == 'Sainato') || (formName.value == 'Scolozzi') || (formName.value == 'Mosca')) {
      showDiscount.innerHTML = 'Gratis';
      ticketPrice = 'gratis';
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

    //Hide the ticket
    showTheTicket.className = 'hidden';

    //Reset showDiscount
    showDiscount.innerHTML = '';

    //reset fields distanceByTrain in the form & price in the ticket
    distanceByTrain.value = '';
    finalPrice.innerHTML = '';

    //Code & code-cp reset
    carriage.innerHTML = '';
    codeCp.innerHTML = '';

    //Reset ageDiscount field
    ageDiscount.value = 'standard';
  }
);
// END
