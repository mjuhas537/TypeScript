"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const methods_1 = require("./database/methods");
function main(sql) {
    const comand = sql.split(" ")[0];
    const query = (0, methods_1.clearQuery)(sql);
    switch (comand) {
        case "SELECT":
            return (0, methods_1.select)(query);
        default:
            return type_1.errorMessage.Error;
    }
}
const test = "SELECT id, name  ,     WHERE name= `Janko` ";
const test1 = "SELECT id, name  ,      isHuman ";
const app = main(test1);
// console.log(app);
