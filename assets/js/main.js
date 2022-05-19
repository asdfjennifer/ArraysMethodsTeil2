// lev1_1: Array sort()

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

let sortierung = languages.sort();

console.log(sortierung);

// lev1_13: Arrays join()

let meinText1 = ["Hello", "World"];
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"];
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"];

let join1 = meinText1.join();
let join2 = meinText1.join("");
let join3 = meinText1.join(" ");
let join4 = meinText1.join("+");

let join5 = meinText2.join();
let join6 = meinText2.join("");
let join7 = meinText2.join(" ");
let join8 = meinText2.join("+");

let join9 = meinText3.join();
let join10 = meinText3.join("");
let join11 = meinText3.join(" ");
let join12 = meinText3.join("+");

console.log(join1);
console.log(join2);
console.log(join3);
console.log(join4);
console.log(join5);
console.log(join6);
console.log(join7);
console.log(join8);
console.log(join9);
console.log(join10);
console.log(join11);
console.log(join12);

// lev1_2: Array reverse()

// In dieser Übung lernen wir, wie man Arrays umgekehrt alphabetisch sortiert.
// Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// Der Code steht im Kommentar.
// Deklariere Funktion sortierung2.
// Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.
// Ruf die Funktion sortierung2 auf.
// Überprüfe das Ergebnis in der Konsole.


let languages99 = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

let sortierung2 = sortierung2().languages99.sort();
let sortierung3 = sortierung2().languages99.reverse();

// let sortierung2() {
//     sortierung2().languages99.sort();
//     sortierung2().languages99.reverse();
// }

console.log(sortierung2());



// let sortierung2() {

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

numArray2.sort((a,b) => a-b);

console.log(numArray2);