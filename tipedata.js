// String

"Ini merupakan contoh string di JavaScript"
'Ini merupakan contoh string di JavaScript'
`Ini merupakan contoh string di JavaScript`

const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);

// Number

40
3.14
5
3.333

// Infinity
const result = 50/0;
console.log(result); // output invinity

// NaN ( Not a Number)
const NaN = number('Nahwa');
console.log(result);

// Boolean

const completed = true;
const passed = false;

console.log(completed, passed); // output: true false

// Dapat dihasilkan dari hasil perbandingan

const isGreat = 5 > 2;
console.log(isGreat);

// Nilai Kosong

// Null
let message = null;
 
console.log(message); // output: null

// undifined
let message1;
 
console.log(message); // output: undefined

// dapat diliat perbedaan null dan undifined pada contoh berikut
const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}

// Properti yang diberi nilai undefined tidak akan tampak ketika diubah ke JSON karena JSON tidak mendukung tipe data undefined. Oleh karena itu, null lebih standar untuk menunjukkan nilai kosong.