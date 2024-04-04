const arr = [];

for (let i = 0; i < 15; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);
function indexKleinsteAb(n) {
    let rw = n;
    for (let i = n + 1; i < arr.length; i++) {
        if (arr[i] < arr[rw]) {
            rw = i;
        }
    }
    return rw;
}
function swap(i, j) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
function selectionSort() {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexKleinstesNachI = indexKleinsteAb(i + 1);
        if (arr[i] > arr[indexKleinstesNachI]) {
            swap(i, indexKleinstesNachI);
        }
    }
}
selectionSort();
console.log(arr);
