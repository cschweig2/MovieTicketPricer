function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}


let firstRelease = {
  movie1: "Borat Subsequent Moviefilm",
  movie2: "Stillwater"
}

let secondRelease = {
  movie1: "1917",
  movie2: "Underwater"
}

let price = 4;

Ticket.prototype.movieCost = function() {
  if (this.movie === firstRelease.movie1 || firstRelease.movie2) {
    price += 4;
  }
  if (this.age > 55) {
    price -= 1;
  }
  if (this.time == "4" || "6")
    price += 2;
  return 'Total price: ' + price; 
};


// let ticket1 = new Ticket("Borat Subsequent Moviefilm", "11:00 AM", 65);


$(document).ready(function() {
  $("form#ticketPrice").submit(function(event) {
    event.preventDefault();
    let age = $("#age").val();
    let movie = $("#movie").val();
    let time = $("#time").val();
    let newTicket = new Ticket(movie, time, age);
    $("#newTicketPrice").text(newTicket.movieCost());
    price = 4; 
    /*
    let  = new Address($("input#homeAddress").val(),$("input#workAddress").val());
    let addressBook = new AddressBook();
    let contact = new Contact("Ada", "Lovelace", "503-555-0100");
    let contact2 = new Contact("Grace", "Hopper", "503-555-0199");
    contact.addAddress(add);
    contact2.addAddress(add); 
    addressBook.addContact(contact);
    addressBook.addContact(contact2);
    console.log(addressBook);
    $(".input-home-address").html(contact.addresses[0].home);
    $(".input-work-address").html(contact.addresses[0].work);
    */
  });
}); 