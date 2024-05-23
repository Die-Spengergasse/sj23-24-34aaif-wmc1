function mysqrt(par) {
    if (par < 0) throw new Error("par neg!!");
    return Math.sqrt(par);
}
function sqrtNeu(par) {
    return new Promise((resolve, reject) => {
        console.log("C");
        resolve(mysqrt(par));
    });
}
console.log("A");
erg = sqrtNeu(-36);  // Promise
erg
    .then(erg => console.log(`Ergebnis: ${erg}`))
    .catch(e => console.log(`Fehler: ${e}`));
console.log("B");
