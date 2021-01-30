//First class ticket
buttonHandler ('first-class-increment', 'first-class', true )
buttonHandler ('first-class-decrement', 'first-class', false )
//Economy class ticket
buttonHandler ('economy-class-increment', 'economy-class', true )
buttonHandler ('economy-class-decrement', 'economy-class', false )

//Increment & Decrement Button Handler
function buttonHandler (buttonIdName, ticketClassCountId, boleanValue){
    document.getElementById(buttonIdName).addEventListener('click', function() {
        countNumberHandler(ticketClassCountId,boleanValue);
        total();
    });
};

//Booking Button handler
document.getElementById('book-btn').addEventListener('click', function(){
    let bookingForm = document.getElementById('first-part');
    bookingForm.style.display = "none";
    let billingForm = document.getElementById('billing-form');
    billingForm.style.display = "block";
})

//Input Ticket quantity Increment & decrement function.
function countNumberHandler(ticketClass,isIncrement){
    const inputCountNumber = getInputCount(ticketClass)
    let newCountNumber = inputCountNumber;
    if(isIncrement == true){
        newCountNumber = inputCountNumber + 1 ;
    }
    if(isIncrement == false && inputCountNumber > 0 ){
        newCountNumber = inputCountNumber - 1 ;
    }
    document.getElementById(ticketClass+'-count').value = newCountNumber;  
}

//Calculate  Subtotal ,Tax and Grand-Total
function  total (){
    let totalFirstClassTicket = getInputCount('first-class');
    let totalEconomyClassTicket = getInputCount('economy-class') ;
    
    document.getElementById('total-ticket').innerText = totalFirstClassTicket + totalEconomyClassTicket;
    document.getElementById('first-total-ticket').innerText = totalFirstClassTicket;
    document.getElementById('economy-total-ticket').innerText = totalEconomyClassTicket;
    
    const subTotal = totalFirstClassTicket * 150 + totalEconomyClassTicket * 100;
    document.getElementById('subTotal').innerText = subTotal;

    const taxAmount = subTotal * 0.1;
    document.getElementById('tax-amount').innerText = taxAmount;
    
    const grandToal = taxAmount + subTotal;
    document.getElementById('grand-total').innerText = grandToal;
    document.getElementById('totalFare').innerText = "$" + grandToal;
}


//Input Ticket quantity Parse into Integer Number.
function getInputCount (ticketClass){
    const inputCount = document.getElementById(ticketClass+'-count');
    const inputCountNumber = parseInt(inputCount.value);
    return inputCountNumber;
}
