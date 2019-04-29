/*
Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be 
firstDigit(inputString) = '1';

For inputString = "q2q-q", the output should be 
firstDigit(inputString) = '2';

For inputString = "0ss", the output should be 
firstDigit(inputString) = '0'.

Hints

split()
includes()
Input/Output

[execution time limit] 5 seconds (ts)

[input] string inputString

A string containing at least one digit.

Guaranteed constraints:

3 ≤ inputString.length ≤ 10.

[output] char
*/

/*
//Первый вариант
function f(inputStr) {
	return inputStr.match(/\d/)[0];
}


*/


function f(inputStr) {
	inputStr = inputStr.split('');
	for (let ch of inputStr) {
		if ('1234567890'.includes(ch)) return ch;
	}
}

module.exports = { f };
