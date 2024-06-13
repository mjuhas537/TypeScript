"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = exports.clearQuery = void 0;
const data_1 = require("./data");
const clearQuery = (query) => {
    // for example query "SELECT id, name  ,       year WHERE name= `Janko` ";
    return query
        .split(",")
        .join(" ")
        .split(" ")
        .filter((x) => x !== "")
        .join(" ");
};
exports.clearQuery = clearQuery;
function select(query) {
    if (isWhere(query)) {
        return [];
    }
    else {
        const database = buildTable(query);
        console.log(database);
        return database;
    }
}
exports.select = select;
function isWhere(query) {
    return query.includes("WHERE");
}
function buildTable(query) {
    const queryColumns = query.split(" ").filter((x) => x !== "SELECT");
    const database = data_1.myDefaultData;
    const allColumns = ["id", "name", "year", "isHuman", "job"];
    const deleteColumns = allColumns.filter((column) => !queryColumns.includes(column));
    database.map((item) => {
        for (const column of deleteColumns) {
            delete item[column];
        }
    });
    allColumns.map((item, indes) => console.log(item, queryColumns[indes]));
    return database;
}
