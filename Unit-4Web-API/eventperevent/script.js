var totalEl = document.querySelector("#total");
var tipEl = document.querySelector("#tip-percentage");
var btnEl = document.querySelector("#submit");
var tipAmtEl = document.querySelector("#tip-amount");
var newtotalEl = document.querySelector("#new-total");
var splitEl = document.querySelector("#num-people");
var btnEl = document.querySelector("#split");
var splitTotEl = document.querySelector("#split-total");

function calculateTip(total,tipPercentage){
    var roundedResult = (total * tipPercentage).toFixed(2);
    return roundedResult;
}
function calculateTotal(total, tipAmount) {
    return parseFloat(total) + parseFloat(tipAmount);
}
function addTip(event){
    event.preventDefault();
    var tipPercentage = tipEl.value * .01;
    var total = totalEl.value;
    var tipAmount = calculateTip(total, tipPercentage);
    var newTotal = calculateTotal(tipAmount, total);
    tipAmtEl.textContent =  tipAmount;
    newtotalEl.textContent = newTotal.toFixed(2);
};


btnEl.addEventListener("click",addTip);


