// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example

// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    let output = [];
    for (const char of text) {
        const lowerLetter = char.toLowerCase();
        // 'a'.charCodeAt(0) is 97
        // 'b'.charCodeAt(0) % 97 = 1 :)
        // a-z between 97 and 122
        if (lowerLetter.charCodeAt(0) < 97 || lowerLetter.charCodeAt(0) > 122) {
            continue;
        }
        const position = lowerLetter.charCodeAt(0) % 'a'.charCodeAt(0) + 1;
        output.push(position);
    }
    return output.join(' ');
}

// console.log('z'.charCodeAt(0));
// console.log('h'.charCodeAt(0) % 97 + 1);
console.log(alphabetPosition("The sunset sets at twelve o' clock."));