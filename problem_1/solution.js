// Problem 1
// ---------
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

const maximum = 1000;

// Initialize sum at 0
var sum = 0;

// Initialize map to keep track of numbers added to avoid duplicates
var numberIndex = {};

// Loop through increasing values of `i` multiplied against 3 or 5.
// Add them to the sum variable and keep track of them by adding
// them to the numberIndex;

for (var i = 0; i*3 < maximum || i*5 < maximum; i++) {
  if (i*3 < maximum && numberIndex[(i*3).toString()] === undefined) {
    sum = sum + i*3;
    numberIndex[(i*3).toString()] = 1;
  }

  if (i*5 < maximum && numberIndex[(i*5).toString()] === undefined) {
    sum = sum + i*5;
    numberIndex[(i*5).toString()] = 1;
  }
}


console.log('The sum of all numbers divisble by 3 or 5 is: ' + sum)

