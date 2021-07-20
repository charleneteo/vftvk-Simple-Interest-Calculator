

function showCalculations() {
	let amount=parseInt(document.getElementById("amount").value);
  let interest_rate=parseInt(document.getElementById("interest_rate").value);
  let years=parseInt(document.getElementById("years").value);

	document.getElementById("output").innerHTML = "If you deposit "+ amount+"<br>"+
  "at an interest rate of "+ interest_rate + "% <br> You wil receive an amount of "+ (calculations(amount,interest_rate,years))+
 
  "<br> in the year "+ (2020 + years)
	
}

function calculations(amount, ir, years){
	return amount*(1+years*ir/100)
}

function updateTextInput(val) {
  document.getElementById('displayValue').innerHTML=val +"%"; 
}

