// Passenger FORM data
var formName = document.getElementById('form-name');
var distanceByTrain = document.getElementById('distance-by-train');


//Ticket fields
var ticketName = document.getElementById('ticket-name');
var ticketPrice = document.getElementById('ticket-price');


//button
var generateTicketButton = document.getElementById('generate-ticket-button');
var resetFormButton = document.getElementById('reset-form');


//Event that generate ticket output
generateTicketButton.addEventListener('click',
  function(){
    // Passenger Name
    ticketName.innerHTML = formName.value;

    //Price based on km
    ticketPrice.innerHTML = (distanceByTrain.value * 0.21).toFixed(2) + '€';
  }
);

//Event that reset Form
resetFormButton.addEventListener('click',
  function() {
    //reset fields (Passenger Name) for form and ticket
    formName.value = "&nbsp;";
    ticketName.innerHTML = "&nbsp;";

    //reset fields distanceByTrain in the form & price in the ticket
    distanceByTrain.value = "&nbsp;";
    ticketPrice.innerHTML = '&nbsp;';
  }
)
