// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// moje rozwiazanie
function findOdd(array) {
    if (array.length === 1) {
        return array[0];
    }
    const numbers = {};
    array.forEach(number => {
        numbers[number] = (number in numbers) ? numbers[number] + 1 : 1;
    });

    const oddInt = Object.entries(numbers).filter(el => el[1] % 2 === 1).sort((a, b) => a[1] - b[1]);

    return parseInt(oddInt[0][0]);
}

// // rozwiazanie GPT
// function findOdd(array) {
//     if (array.length === 1) {
//         return array[0];
//     }

//     return array.reduce((a, b) => a ^ b);
// }

// W powyższym kodzie, funkcja reduce() jest używana do sumowania elementów w array, w wyniku czego otrzymujemy liczbę, która jest nieparzysta w wyniku właściwości XOR. W ten sposób uzyskujemy rozwiązanie z jednym przebiegiem, zamiast z dwoma (jednym dla budowy obiektu, a drugim dla jego filtrowania i sortowania).

console.log(findOdd([1, 1, 2]));
console.log(findOdd([7]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));