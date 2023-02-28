// Complete the solution so that the function will break up camel casing, using a space between words.
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
const breakCamelCase = (string) => {
    let newString = '';
    for (const char of string) {
        newString += char.charCodeAt(0) <= 90 ? ' ' + char : char;
    }
    return newString;
}

//rozwiazanie GPT:
// const breakCamelCase = (string) => string.replace(/[A-Z]/g, char => ` ${char}`);


// console.log('A'.charCodeAt(0));
// console.log('Z'.charCodeAt(0));
// console.log('a'.charCodeAt(0));
// console.log('z'.charCodeAt(0));

console.log(breakCamelCase("camelCasing"));
console.log(breakCamelCase("identifier"));
console.log(breakCamelCase(""));
console.log(breakCamelCase("marekKucmierz"));