/*
The master launch sequence consists of several independent sequences for
different systems. Your goal is to verify that all the individual system
sequences are in strictly increasing order. In other words, for any two
elements i and j (i < j) of the master launch sequence that belong to 
the same system (having systemNames[i] = systemNames[j]), their values
should be in strictly increasing order 
(i.e. stepNumbers[i] < stepNumbers[j]).

Example

For systemNames = ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", 
"dragon"] and stepNumbers = [1, 10, 11, 2, 12, 111], the output should 
be launchSequenceChecker(systemNames, stepNumbers) = true.
There are three independent sequences for systems "stage_1", "stage_2", 
and "dragon". These sequences are [1, 2], [10, 12], and [11, 111], 
respectively. The elements are in strictly increasing order for all 
three.

For systemNames = ["stage_1", "stage_1", "stage_2", "dragon"] and 
stepNumbers = [2, 1, 12, 111], the output should be 
launchSequenceChecker(systemNames, stepNumbers) = false.
There are three independent sequences for systems "stage_1", "stage_2", 
and "dragon". These sequences are [2, 1], [12], and [111], respectively. 
In the first sequence, the elements are not ordered properly.

Hints

hasOwnProperty()
Input/Output

[execution time limit] 5 seconds (ts)

[input] array.string systemNames

An array of non-empty strings. systemNames[i] contains the name of the 
system to which the ith element of the master launch sequence belongs.

Guaranteed constraints:

1 ≤ systemNames.length ≤ 5 · 104, 1 ≤ systemNames[i].length ≤ 10.

[input] integer weight1

Guaranteed constraints:

2 ≤ weight1 ≤ 10.

[input] array.integer stepNumbers

An array of positive integers. stepNumbers[i] contains the value of the 
ith element of the master launch sequence.

Guaranteed constraints:

stepNumbers.length = systemNames.length, 1 ≤ stepNumbers[i] ≤ 109.

[input] integer weight2
Guaranteed constraints:

2 ≤ weight2 ≤ 10.

[output] boolean Return true if all the individual system sequences are 
in strictly increasing order, otherwise return false.
*/

/*
function f(systemNames, stepNumbers) {
	
	function isAscending(arr) {
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] <= arr[i-1]) return false;
		}
		return true;
	}
	
	const dict = new Map();
	systemNames.forEach( (system, index) => {
		if (!dict.has(system)) {
			dict.set(system, [stepNumbers[index]]);
		} else {
			const steps = dict.get(system);
			steps.push(stepNumbers[index]);
			dict.set(system, steps);
		}
	});
	for (let steps of dict.values()) {
		if (!isAscending(steps)) return false;
	}
	return true;
	
}
*/

//Оптимизированный вариант
function f(systemNames, stepNumbers) {
	
	
	const dict = new Map();
	for (let i = 0; i < systemNames.length; i++) {
		if (!dict.has(systemNames[i])) {
			dict.set(systemNames[i], [stepNumbers[i]]);
		} else {
			const steps = dict.get(systemNames[i]);
			if (steps[steps.length - 1] > stepNumbers[i]) {
				return false;
			} else {
				steps.push(stepNumbers[i]);
				dict.set(systemNames[i], steps);
			}
		}
	}
	return true;
	
}



module.exports = { f };
