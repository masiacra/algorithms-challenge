/*
You have two integer arrays, a and b, and an integer target value v. 
Determine whether there is a pair of numbers, where one number is taken 
from a and the other from b, that can be added together to get a sum of 
v. Return true if such a pair exists, otherwise return false.

Example For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output 
should be sumOfTwo(a, b, v) = true.

Hints

hasOwnProperty()
Input/Output

[execution time limit] 5 seconds (ts)
[input] array.integer a
An array of integers.

Guaranteed constraints:

0 ≤ a.length ≤ 105, -109 ≤ a[i] ≤ 109.

[input] array.integer b
An array of integers.

Guaranteed constraints:

0 ≤ b.length ≤ 105, -109 ≤ b[i] ≤ 109.

[input] integer v*
Guaranteed constraints:

-109 ≤ v ≤ 109.

[output] boolean
true if there are two elements from a and b which add up to v, and false 
otherwise.
*/

/*
//Решение в лоб
function f(a, b, v) {
	for (let num of a) {
		for (let dig of b) {
			if (num + dig === v) return true;
		}
	}
	return false;
}
*/

//Dylan Israel предлагает следующее решение.
function f(a,b,v) {
	const myset = new Set();
	for (let num of b) {
		myset.add(v-num); 
	}
	for (let dig of a) {
		if (myset.has(dig)) return true;
	}
	return false;
}
//Недостаток этого решения в том, что мы не знаем точно, что 
//значения в массиве b больше значений в массиве a.

module.exports = { f };
