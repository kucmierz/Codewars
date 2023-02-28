// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// describe("Tests", function() {
//     it("Sample tests", function() {
//       for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
//         assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
//       }
//     });
//   });

// A - 65, Z - 90, a - 97, z - 122

function rot13(message) {
    const charToMove = 13;
    output = '';
    for (const char of message) {
        let coded = char.charCodeAt(0) + charToMove;

        console.log(coded);
        if (coded > 90) {
            coded = coded - 90 + 65;
        }
        // console.log(char, char.charCodeAt(0), String.fromCharCode(char.toUpperCase().charCodeAt(0) + charToMove));

        const decoded = String.fromCharCode(coded);
        output += decoded;
    }
}
// ZADANIE NIE JEST UKONCZONE
rot13("test")