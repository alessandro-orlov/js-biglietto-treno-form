//Evet buttons
var generateTicketButton = document.getElementById('generate-ticket-button');
var resetFormButton = document.getElementById('reset-form');

// Passenger FORM data
var formName = document.getElementById('form-name');
var distanceByTrain = document.getElementById('distance-by-train');
var ageDiscount = document.getElementById('age-discount');
var error = document.getElementById('error-msg')

//Ticket fields
var showTheTicket = document.getElementById('ticket-output')
var ticketName = document.getElementById('ticket-name');
var showDiscount = document.getElementById('discount');
var carriage = document.getElementById('carriage');
var codeCp = document.getElementById('code-cp');
var finalPrice = document.getElementById('ticket-price');


//Event that generate ticket output
generateTicketButton.addEventListener('click',
  function() {
    //Error message
    if((formName.value == '') || (distanceByTrain.value == '')) {
      error.className = 'visible';
      showTheTicket.className = 'hidden';
    } else {

      //Hide error message
      error.className = 'hidden';

      //Show the ticket
      showTheTicket.className = 'visible';

      //Ticket output
      ticketName.innerHTML = formName.value;
      carriage.innerHTML = Math.floor(Math.random() * 41);
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

      //Special price for my mentors
      if((formName.value == 'Sainato') || (formName.value == 'sainato') || (formName.value == 'Scolozzi') || (formName.value == 'scolozzi') || (formName.value == 'Mosca') || (formName.value == 'Mosca')) {
        showDiscount.innerHTML = 'Gratis';
        ticketPrice = 'Gratis';
      }

      //Show final price
      finalPrice.innerHTML = ticketPrice + '€';
      if(ticketPrice == 'Gratis' ) {
        finalPrice.innerHTML = 'GRATIS';
      }

    }
  }
);

//Event that reset Form & hide ticket
resetFormButton.addEventListener('click',
  function() {
    //Hide the ticket
    showTheTicket.className = 'hidden';

    //ERROR RESET
    error.className = 'hidden';

    //Passenger Form Reset
    formName.value = '';
    distanceByTrain.value = '';
    ageDiscount.value = 'standard';

    //Ticket reset
    ticketName.innerHTML = '';
    showDiscount.innerHTML = '';
    carriage.innerHTML = '';
    codeCp.innerHTML = '';
    finalPrice.innerHTML = '';

  }
);
