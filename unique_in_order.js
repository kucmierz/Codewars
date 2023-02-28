//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    const filtered = [];
    for (let index = 0; index < iterable.length; index++) {
        if (iterable[index] !== iterable[index + 1]) {
            filtered.push(iterable[index]);
        }
    }
    return filtered;
}

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder('AAAABBBCCDAABBB'));