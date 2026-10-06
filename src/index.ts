import axios from 'axios'; 

export interface UnusedInterface { 
    id: number;
    name: string;
}

export const unusedConstant = "Nadie importa esta constante"; 

export function main() {
    console.log("Ejecutando app de prueba...");
    axios.get('https://jsonplaceholder.typicode.com/todos/1');
}


main();