import axios from 'axios';
import { usedFunction } from './helpers/activeUtils';

export interface UnusedUserType {
    id: number;
    name: string;
}

export const myForgottenConstant = "Hello World";

export async function main() {
    console.log("App is running!");
    
    usedFunction();

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
    } catch (error) {
        console.error("Axios error", error);
    }
}

main();