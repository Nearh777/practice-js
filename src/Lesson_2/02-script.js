// if(){

// }else{

// }



// const value = 5;
// if (value === 1) {
//     console.log('one');
// } else if (value === 2) {
//     console.log('two');
// } else if (value === 5) {
//     console.log('Good result');
// } else {
//     console.log("default")
// }

// switch (value) {
//     case 1:
//         console.log('one');
//         break
//     case 2:
//         console.log('two');
//         break
//     case 5:
//         console.log('Good result');
//         break
//     default:
//         console.log("default")
// }



// Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const value = prompt("Яка офіційна назва JavaScript?");


// if (value === 'ECMAScript') {
//     alert('Правильно!')
// } else {
//     alert('Не знаєте? ECMAScript!')
// }


// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 26;

// let timestring;

// if (minutes) {
//     console.log(`${hours}г. ${minutes}хв.`)
// } else {
//     console.log(`${hours}г`)
// }