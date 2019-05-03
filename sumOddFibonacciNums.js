/*
Given a positive integer num, return the sum of all odd Fibonacci 
numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every 
additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci 
numbers less than or equal to 10 are 1, 1, 3, and 5.

Example

sumOddFibonacciNums(10) should return 10
sumOddFibonacciNums(1000) should return 1785
sumOddFibonacciNums(4000000) should return 4613732
*/

function f(n) {
	let a = 1, b = 1;
	let sum = 2;
	while (b <= n) {
		let next = a + b;
		if (next % 2 !== 0 && next <= n) {
			sum += next;
		}
		
		a = b;
		b = next;
	}
	return sum;
}



module.exports = { f };
