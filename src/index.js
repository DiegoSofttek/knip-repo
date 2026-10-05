"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const axios_1 = __importDefault(require("axios"));
function main() {
    console.log("Ejecutando app de prueba...");
    axios_1.default.get('https://jsonplaceholder.typicode.com/todos/1');
}
main();
