// alert("Hallo 4AAIF, 'Lieblingsklasse'");
console.log("Mitte April ist die PLF");

let anzahl = 18;
let begruessungsText = "Hallo 4AAIF!";


console.log(begruessungsText);

console.log("Heute sind " + anzahl + " Studierende anwesend.");

anzahl = "Das ist aber spannend!";
console.log(anzahl);

anzahl = false;

console.log("anzahl: " + anzahl);

const wert = 15.3;
// wert = 16.4; nicht moeglich, da const!

console.log(typeof wert);

let wert2 = 18;

console.log(typeof wert2);

class A {
    x = " ;-) ";
}

a = new A();

console.log(typeof a); // object
console.log(a.x); // liefert den wert von x
console.log(a.y); // liefert undefined


let o = { vorname: "Hans", nachname: "Peter" };
console.log(typeof o);
console.log("Objekt: ", o);



let x1 = "18";
let x2 = 18;

console.log('18 == "18" ? ', (x1 == x2)); // Inhaltsgleichheit (Inhalt tatsaechlich gleich) ==> true
console.log('18 === "18" ? ', (x1 === x2)); // Prfg. auf Inhalts- und Typ-Gleichheit

for (let i=0; i<10; i++) {
    console.log(i);
}

if (true) {
    console.log("ist wahl");
} else {
    console.log("wird nicht erreicht");
}


