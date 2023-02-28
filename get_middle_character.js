
function getMiddle(s) {
    const len = s.length;
    return len % 2 === 0 ? s.substring(len / 2 - 1, len / 2 + 1) : s[Math.ceil(len / 2) - 1];
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('a'));