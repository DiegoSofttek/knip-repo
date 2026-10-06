import axios from 'axios';

function main() {
    console.log("Ejecutando app de prueba...");
    axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

main();
