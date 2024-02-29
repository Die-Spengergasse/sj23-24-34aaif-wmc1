function leer() {
    console.log('1:', new Date().toLocaleTimeString());
}
setTimeout(() => {
    console.log('3:', new Date().toLocaleTimeString());
}, 3000);
console.log('2:', new Date().toLocaleTimeString());
