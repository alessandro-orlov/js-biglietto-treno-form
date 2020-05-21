// Passenger form data
var formName = document.getElementById('form-name');
console.log(formName.value)
var generateTicket = document.getElementById('generate-ticket"')




//Ticket output
var ticketName = document.getElementById('ticket-name');


//Event that generate ticket
generateTicket.addEventListener('click',
  function(){
    ticketName.innerHTML = formName.value;
  }
);

//
// addEventListener("click",
// function(){
//   document.getElementById("demo").innerHTML = "Hello World";
// });
