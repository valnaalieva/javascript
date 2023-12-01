let n = 2;
let m = 5;
let count = 50;
let array = []; 
 
let min = Math.min(n, m); 
let max = Math.max(n, m);
let difference = Math.abs(max-min);
 
for(let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * (difference + 1) + min); 
    array.push(randomNumber); 
}
console.log(array);