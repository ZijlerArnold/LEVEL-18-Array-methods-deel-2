console.log(``);
console.log(`             ===== LEVEL 18 - Array methods - deel 2 =====`);
console.log(``);
console.log(``);

console.log(`===== Opdracht A:  .find method. =====`);
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }
];
const findSpidy = superheroes.find((hero) => {
    return hero.name === 'Spiderman'
})
console.log(findSpidy);
console.log(``);

console.log(`===== Opdracht B:  .forEach method. of  .map method. =====`);
const arry = [1, 2, 3];
const double = arry.map(function (item, index, array) {
    return item * 2
});
console.log(double);

console.log(`===== Opdracht C:  number higher then 10 =====`);
const numbers = [1, 4, 3, 6, 9, 7, 11, 30];
const higherThenTen = numbers.filter((number) => {
    return number >= 10
})
console.log(`These are the numbers higher then Ten: ${higherThenTen}`);
console.log(``);

console.log(`===== Opdracht D:  look for string: "Italy" =====`);
const lands = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
const isItalyInTheGreat7 = lands.some((land) => {
    return land === 'Italy'
})
console.log(`Jazeker, het is: ${isItalyInTheGreat7}`);
console.log(``);

console.log(`===== Opdracht E:  .forEach.  elke integer vertienvoudigt.=====`);
const numbers2 = [1, 4, 3, 6, 9, 7, 11];
numbers2.forEach((num) => {
    console.log(num * 10);
})
console.log(``);

console.log(`===== Opdracht F:  true or false onder de honderd =====`);
const numbers4 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 14, 10, 77, 84, 98];
const underHundred = numbers4.some((num) => {
    return num > 100
})
console.log(`Status getallen boven de 100 staat op: ${underHundred}`);
console.log(``);

console.log(`===== Opdracht G:  Bonus! .reduce method totaal van arry optellen =====`);
const numbers5 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigsom = numbers5.reduce((goed, item) => {
    return item + goed
}, 0)
console.log(`This is te total: ${bigsom}`);
console.log(``);