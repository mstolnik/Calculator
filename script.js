document.addEventListener("submit", calculate);

function calculate(e) {
  e.preventDefault();
  var amount = document.getElementById("amount").value;
  var years = document.getElementById("years").value;
  var rate = document.getElementById("rate").value;
  var selected = document.querySelector('input[name="choice"]:checked');

  var r = rate / 100 / 12; //monthly interest rate//
  if (selected.value == "option1") {
    //repayment//

    var n = years * 12; //total number of payments//
    var repayment =
      (amount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    console.log(repayment);
  } else {
    var interest = amount * r;
    console.log(interest);
  }
}
