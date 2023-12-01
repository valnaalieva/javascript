let array = [];
let n = 7;

for (let i = 0; i < n; i++) {
    array.push(i);
}

for (let i = 0; i < n; i++) {  
    let j = Math.floor(Math.random() * n);

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

console.log(array);