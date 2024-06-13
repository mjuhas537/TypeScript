import { database, item } from "../type";
import { myDefaultData } from "./data";

export const clearQuery = (query: string): string => {
  // for example query "SELECT id, name  ,       year WHERE name= `Janko` ";
  return query
    .split(",")
    .join(" ")
    .split(" ")
    .filter((x) => x !== "")
    .join(" ");
};

export function select(query: string): object[] {
  if (isWhere(query)) {
    return [];
  } else {
    return buildTable(query);
  }
}

function isWhere(query: string): boolean {
  return query.includes("WHERE");
}

function buildTable(query: string) {
  const queryColumns = query.split(" ").filter((x) => x !== "SELECT");
  const database = myDefaultData as database;
  const allColumns = ["id", "name", "year", "isHuman", "job"];
  const deleteColumns = allColumns.filter(
    (column: any) => !queryColumns.includes(column)
  );

  //  build new table with select columns
  database.map((item: any) => {
    for (const column of deleteColumns) {
      delete item[column];
    }
  });
  return database;
}
