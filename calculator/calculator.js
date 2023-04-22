window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = document.getElementById("loan-amount").value;
  let years = document.getElementById("loan-years").value;
  let rate = document.getElementById("loan-rate").value;

  calculateMonthlyPayment({amount: 0, years: 0, rate: 0});
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentVals = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentVals));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let value = values;
    let p = value.amount;
    let i = (value.rate / 100) / 12;
    let n = Math.floor(value.years * 12);
  
    let monthlyPayment = ((i * p) / (1 - Math.pow((1 + i), -n))).toFixed(2)
    return monthlyPayment
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    
    monthPayDisplay = document.getElementById("monthly-payment");
    monthPayDisplay.innerText = monthly;
    
}
