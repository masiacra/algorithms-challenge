/*
Let's define digit degree of some positive integer as the number of 
times we need to replace this number with the sum of its digits until 
we get to a one digit number.

Given an integer, find its digit degree.

Example

For n = 5, the output should be digitDegree(n) = 0;
For n = 100, the output should be digitDegree(n) = 1. 1 + 0 + 0 = 1.
For n = 91, the output should be 
digitDegree(n) = 2. 9 + 1 = 10 -> 1 + 0 = 1.
Hints

toString()
parseInt()
split()
reduce()
Input/Output

[time limit] 4000ms (js)

[input] integer n

Guaranteed constraints:

5 ≤ n ≤ 109.

[output] integer
*/

function f(n) {
	n = n + '';
	let degree = 0;
	while (n.length > 1) {
		n = n.split('').reduce( (sum, cur) => {
			return sum + Number(cur);
		}, 0);
		n += '';
		degree++;
	}
	return degree;
}

module.exports = { f };
