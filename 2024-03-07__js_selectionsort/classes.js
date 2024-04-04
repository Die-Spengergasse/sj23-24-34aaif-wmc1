class Person {
    #vorname;
    constructor(vorname, nachname, geburtsdatum) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.geburtsdatum = geburtsdatum;
    }
    get vorname() {
        return this.#vorname;
    }
    // Muss groß anfangen
    set vorname(wert) {
        // Parameterprüfung
        if (wert[0] != wert[0].toUpperCase()) {
            throw new Error('Vorname muss groß beginnnen');
        }
        this.#vorname = wert;
    }
    toString() {
        return `${this.vorname} ${this.nachname} wurde am ${this.geburtsdatum} geboren.`;
    }
}

let q = new Person('Georg', 'graf', '13.1.70');
console.log(q.toString());
