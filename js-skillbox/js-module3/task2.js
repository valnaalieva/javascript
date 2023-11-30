let userName = "КлаВа";
let userSurname = "Кока";

let userNameNormalized = userName[0].toUpperCase() + userName.slice(1).toLowerCase(); 
let userSurnameNormalized = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase(); 
console.log(userNameNormalized, userSurnameNormalized); 
console.log(userName === userNameNormalized ? 'Имя было преобразовано' : 'Имя осталось без изменений');  
console.log(userSurname === userSurnameNormalized ? 'Фамилия была преобразована' : 'Фамилия осталась без изменений');