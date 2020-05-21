// Passenger FORM data
var formName = document.getElementById('form-name');
var distanceByTrain = document.getElementById('distance-by-train');


//Ticket fields
var ticketName = document.getElementById('ticket-name');
var ticketPrice = document.getElementById('ticket-price');


//button
var generateTicket = document.getElementById('generate-ticket-button');


//Event that generate ticket output
generateTicket.addEventListener('click',
  function(){
    // Passenger Name
    ticketName.innerHTML = formName.value;

    //Price based on km
    ticketPrice.innerHTML = distanceByTrain.value * 0.21;
  }
);
