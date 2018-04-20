// scripts/main.js
function calculateSum() {
var a = parseInt(document.getElementById('field1').value);
var b = parseInt(document.getElementById('field2').value);
var c = parseInt(document.getElementById('field3').value);
var d = parseInt(document.getElementById('field4').value);
var e = parseInt(document.getElementById('field5').value);
 var result = document.getElementById('result');
console.log(a + b + c + d + e);
 result.value = a + b + c + d + e;
}


function calculateProduct() {
var f = parseInt(document.getElementById('field1_2').value);
var g = parseInt(document.getElementById('field2_2').value);
var h = parseInt(document.getElementById('field3_2').value);
var i = parseInt(document.getElementById('field4_2').value);

 var result_2 = document.getElementById('result_2');
console.log(f * g * h * i);
result_2.value = f * g * h * i;
}


function calculateQuotient() {


var result = parseInt(document.getElementById('result').value);
var result_2 = parseInt(document.getElementById('result_2').value);

var result_3 = document.getElementById('result_3');
console.log(result / result_2);
result_3.value = result / result_2;
}
