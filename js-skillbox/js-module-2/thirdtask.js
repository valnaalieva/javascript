let n = 2;
let m = 5;

let firstRandomNumber = Math.round(Math.random() * Math.abs(n-m) + Math.min(n,m));
let secondRandomNumber = Math.round(Math.random() * Math.abs(n - m) + Math.min(n,m));

console.log(firstRandomNumber, secondRandomNumber);
console.log(firstRandomNumber < secondRandomNumber);
console.log(firstRandomNumber > secondRandomNumber);
console.log(firstRandomNumber <= secondRandomNumber);
console.log(firstRandomNumber >= secondRandomNumber);
console.log(firstRandomNumber ===secondRandomNumber);
console.log(firstRandomNumber !== secondRandomNumber);