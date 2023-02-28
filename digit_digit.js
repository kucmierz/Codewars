
const squareDigits = (num) => {
    let outputString = ''
    for (const number of usernumumber.toString()) {
        outputString += (number * number).toString();
    }
    return parseInt(outputString);
}

console.log(squareDigits(9119));
console.log(squareDigits(765));