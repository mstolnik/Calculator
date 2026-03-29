document.addEventListener("submit", calculate);
const clearButton = document.getElementById("all");
clearButton.addEventListener("click", clearAll);
function calculate(e) {
  e.preventDefault();
  clearErrors();
  var amount = document.getElementById("amount").value;
  var years = document.getElementById("years").value;
  var rate = document.getElementById("rate").value;
  var selected = document.querySelector('input[name="choice"]:checked');

  var hasError = false;

  if (amount.trim() == "") {
    document.getElementById("euro").style.backgroundColor = "red";
    document.getElementById("euro").style.color = "white";
    document.getElementById("amountRequired").style.display = "block";
    document.getElementById("amountBorder").style.borderColor = "red";
    hasError = true;
  }
  if (years.trim() == "") {
    document.getElementById("yearsBox").style.backgroundColor = "red";
    document.getElementById("yearsBox").style.color = "white";
    document.getElementById("yearsRequired").style.display = "block";
    document.getElementById("yearsBorder").style.borderColor = "red";
    hasError = true;
  }
  if (rate.trim() == "") {
    document.getElementById("percentage").style.backgroundColor = "red";
    document.getElementById("percentage").style.color = "white";
    document.getElementById("rateRequired").style.display = "block";
    document.getElementById("rateBorder").style.borderColor = "red";
    hasError = true;
  }
  if (!selected) {
    document.getElementById("choiceRequired").style.display = "block";
    hasError = true;
  }
  if (hasError) {
    return;
  }
  var r = rate / 100 / 12; //monthly interest rate//
  if (selected.value == "option1") {
    //repayment//

    var n = years * 12; //total number of payments//
    var repayment =
      (amount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    console.log(repayment);
    document.getElementById("result").style.display = "flex";
    document.getElementById("main").style.display = "none";
    document.getElementById("repaymentResult").innerText =
      "€" + repayment.toFixed(2);
    var payment = n * repayment;
    document.getElementById("final").innerText = "€" + payment.toFixed(2);
    document.getElementById("term").style.display = "block";
    document.getElementById("final").style.display = "block";
  } else {
    var interest = amount * r;
    console.log(interest);
    document.getElementById("result").style.display = "flex";
    document.getElementById("main").style.display = "none";
    document.getElementById("term").style.display = "none";

    document.getElementById("final").style.display = "none";
    document.getElementById("rata").innerText = "Your interest is";
    document.getElementById("repaymentResult").innerText =
      interest.toFixed(2) + "%";
  }
}

function clearAll(e) {
  e.preventDefault();
  document.getElementById("amount").value = "";
  document.getElementById("years").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("option1").checked = false;
  document.getElementById("option2").checked = false;
  document.getElementById("result").style.display = "none";
  document.getElementById("main").style.display = "block";
  clearErrors();
}

function clearErrors() {
  document.getElementById("euro").style.backgroundColor = "#e4f4fd";
  document.getElementById("euro").style.color = "black";
  document.getElementById("amountRequired").style.display = "none";
  document.getElementById("amountBorder").style.borderColor = "black";

  document.getElementById("yearsBox").style.backgroundColor = "#e4f4fd";
  document.getElementById("yearsBox").style.color = "black";
  document.getElementById("yearsRequired").style.display = "none";
  document.getElementById("yearsBorder").style.borderColor = "black";

  document.getElementById("percentage").style.backgroundColor = "#e4f4fd";
  document.getElementById("percentage").style.color = "black";
  document.getElementById("rateRequired").style.display = "none";
  document.getElementById("rateBorder").style.borderColor = "black";

  document.getElementById("choiceRequired").style.display = "none";
}
