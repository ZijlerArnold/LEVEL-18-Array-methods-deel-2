console.log(``);
console.log(`             ===== LEVEL 18 - Array methods - deel 1 =====`);
console.log(``);
console.log(``);

console.log(`===== Opdracht A: cool aan array toevoegen met push method =====`);
const words = ["nice", "awesome", "tof"];
const addTheWordCool = () => {
    console.log(words);
    words.push('Cool');
    console.log(words);
}
addTheWordCool();
console.log(``);

console.log(`===== Opdracht B: Elementen retouneren =====`);
const bucket = ['apple', 'mango', 'banana', 'orange'];
const howManyFruits = () => console.log(`The total of fruits in the bucket: ${bucket.length}`);
howManyFruits();
console.log(``);

console.log(`===== Opdracht C: First land in list =====`);
const selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];
console.log(selectBelgiumFromBenelux);
const firstLand = () => console.log(`The first land in the list: ${selectBelgiumFromBenelux[0]}`);
firstLand();
console.log(``);

console.log(`===== Opdracht D: Remove last animal =====`);
const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"];
const getLastAnimal = () => {
    //lastElementInArray.pop()
    console.log(lastElementInArray.pop());
}
getLastAnimal();
console.log(``);

console.log(`===== Opdracht E: first element remove slice vs splice =====`);
const presidents = ["Trump", "Obama", "Bush", "Clinton"];
const impeachTrumpSlice = () => console.log(`${presidents.slice(1)}, Slice do not modifies the arry`);
impeachTrumpSlice();
const impeachTrumpSplice = () => console.log(`${presidents.splice(1)}, Splice modifies the arry.`);
impeachTrumpSplice()
console.log(``);

console.log(`===== Opdracht F: JOIN the elements together =====`);
const stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
console.log(stringsTogether);
const joinAll = () => console.log(stringsTogether.join(" "));
joinAll();
console.log(``);

console.log(`===== Opdracht G: combining arrays with concat =====`);
const arry1 = [1, 2, 3];
const arry2 = [4, 5, 6];

const combineArrays = () => console.log(arry1.concat(arry2));
combineArrays();
console.log(``);