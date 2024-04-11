class Person {
    #name;
    #groesse;
    #gewicht;
    static staat = 'AT';
    constructor(obj) {
        this.#name = obj.name;
        this.#groesse = obj.groesse;
        this.#gewicht = obj.gewicht;
    }
    get name() {
        debugger;
        return this.#name;
    }
    set name(name) {
        debugger;
        throw new Error('kann nicht gesetzt werden');
    }
    bmi() {
        return this.#gewicht / this.#groesse ** 2;
    }
    toString() {
        return `${this.#name} ist ${this.#gewicht}kg schwer und ${
            this.#groesse
        }m groß (BMI: ${this.bmi()})`;
    }
}

const person = new Person({ name: 'Donald', groesse: 1.75, gewicht: 95 });
console.log(person.name);
console.log(person + '');
console.log(Person.staat);
