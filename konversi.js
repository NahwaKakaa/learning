// Konversi Eksplisit

// Mengubah ke string
const number = 123;
const boolean = true;

const strNumber = string(number);
const strBoolean = boolean.toString();

console.log(strNumber);
console.log(strBoolean);

// Mengubah ke Number
const strNumber1 = '123';
const strFloat = '3.14';
const boolean1 = true;

const numFromString = Number(strNumber1);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean1);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean);

// Catatan
// Dalam number, nilai boolean direpresentasikan dengan angka 1 dan 0. Boolean true akan diubah menjadi 1, sedangkan false diubah ke 0.