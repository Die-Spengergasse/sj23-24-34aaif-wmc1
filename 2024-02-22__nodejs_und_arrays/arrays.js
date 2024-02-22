const a = [1, 2, 3]
a.push('a');
a.push(false);
a.push( { a: { b: [1, 2, 3], c: "d"} } );
a.push("Peter", "Sandra");

console.log("a: ", a);
process.stdout.write("a: "+ a + "\n");

console.log(a[2]);
console.log("a['3']: ", a['3']);
console.log("a[Number(false)]: ", a[Number(false)]);
console.log("a['Vier']: ", a['Vier']);
console.log("a[333]: ", a[333]);

const b = ["a", "b", "c", "d", "e", "f"];
const c = [1, 2, 3, 4, 5, 6];
console.log("b:", b);
console.log("c:", c);

const d = b.concat(c);

console.log("a.concat(b): ", d);

console.log("d.indexOf(3): ", d.indexOf(3));
console.log("d.indexOf('d'): ", d.indexOf('d'));
console.log("d.indexOf('x'): ", d.indexOf('x')); // not found --> -1

const e = d.pop("a");
console.log("d.pop('a'): ", e);
