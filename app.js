var first = document.querySelector('.first-js');
var last = document.querySelector('.last-js');
var amount = document.querySelector('.principal-js');
var rate = document.querySelector('.rate-js');
var years = document.querySelector('.years-js');
var months = document.querySelector('.periods-js');
var button = document.querySelector('.button-js');
var output = document.querySelector('output');
var futurevalue = function(a, r, y) {
  var value = a +(a * r) * y;
  return value;
};


button.addEventListener('click', function() {
  var fn = first.value;
  
  var a = parseFloat(amount.value);
  var r = parseFloat(rate.value);
  
  var y = parseFloat(years.value);
  var result = futurevalue(a, r, y);
  var e = result - a;
  output.textContent = fn + " " + " the future value of your investment = " + "$" + result + ".  That's $" + e + " in interest earned!";
});

// You must use at least two functions, one that passes parameters, and another that returns the calculated result based on those parameters.

// Bonus: Also show what the user earned just in interest alone.