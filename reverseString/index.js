// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedString = str.split('').reverse().join('');
  return reversedString;
}

// Alternate Solution

// function reverse(str) {
//   let reversed = '';
//   for (let characer of str) {
//     reversed = characer + reversed;
//   }
//   return reversed;
// }

// Alternate Solution

// function reverse(str) {
//   return str.split('').reduce((reversed, characer) => {
//     return characer + reversed;
//   }, '');
// }

module.exports = reverse;
