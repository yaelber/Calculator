
function squareNumber(squareValue) {
	var squareValue = document.getElementById('square-input').value
	var square = squareValue * squareValue;
	document.getElementById('square-div').innerHTML = "The result of squaring the number " + squareValue + " is " + square;
	return square;
}

function halfOfNumber(halfValue) {
	var halfValue = document.getElementById('half-input').value
	var half = halfValue / 2;
	document.getElementById('half-div').innerHTML = "Half of " + halfValue + " is " + half;
	return half;
}

function percentOf(fractionValue,wholeValue) {
	var fractionValue = document.getElementById('percent1-input').value
	var wholeValue = document.getElementById('percent2-input').value
	var percent = (fractionValue / wholeValue) * 100;
	document.getElementById('precent-div').innerHTML = fractionValue + " is " + percent + "% of " + wholeValue;
	return percent;
}

function areaOfCircle(radiusValue) {
	var radiusValue = document.getElementById('area-input').value
	area = Math.PI * ((radiusValue)*(radiusValue));
	document.getElementById('circle-div').innerHTML ='The area of a circle with radius ' + radiusValue + 'is ' + area;
}


document.getElementById('square-button').addEventListener('click', squareNumber)
document.getElementById('half-button').addEventListener('click', halfOfNumber)
document.getElementById('percent-button').addEventListener('click', percentOf)
document.getElementById('area-button').addEventListener('click', areaOfCircle)


//Bonus//
document.getElementById('square-input').onkeypress = squareNumber;
document.getElementById('half-input').onkeypress = halfOfNumber;
document.getElementById('precent2-input').onkeypress = percentOf;
document.getElementById('area-input').onkeypress = areaOfCircle;



