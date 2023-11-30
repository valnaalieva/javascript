let a = 13.123456789;
let b = 2.123;
let n = 5;

aNormalized = Math.floor(a % 1 * Math.pow(10, n))
bNormalized= Math.floor(b % 1 * Math.pow(10,n))

console.log(aNormalized, bNormalized);
console.log(aNormalized > bNormalized);
console.log(aNormalized < bNormalized);
console.log(aNormalized <= bNormalized);
console.log(aNormalized >= bNormalized);
console.log(aNormalized === bNormalized);
console.log(aNormalized !== bNormalized);