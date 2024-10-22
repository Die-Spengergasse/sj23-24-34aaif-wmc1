class Person {
    constructor(name, groesseM, gewicht) {
        this.name = name;
        this.groesseM = groesseM;
        this.gewicht = gewicht;
    }
    bmi() {
        return this.gewicht / this.groesseM ** 2;
    }
    toString() {
        return `Person ${this.name} ist ${this.groesseM}m groß und ${this.gewicht}kg schwer.`;
    }
}
let p = new Person('Andy', 1.8, 60);
console.log(p + '');
