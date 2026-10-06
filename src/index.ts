import axios from 'axios'; 

const unusedConstant = "Nadie importa esta constante"; 

export function main() {
    console.log("Ejecutando app de prueba...");
    void unusedConstant;
    axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

main();