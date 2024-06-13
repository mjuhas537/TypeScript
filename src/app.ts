import { database, errorMessage, sqlCommands } from "./type";
import { clearQuery, select } from "./database/methods";

function main(sql: string): object[] | errorMessage {
  const comand: sqlCommands = sql.split(" ")[0] as sqlCommands;
  const query = clearQuery(sql);

  switch (comand) {
    case "SELECT":
      return select(query);
    default:
      return errorMessage.Error;
  }
}

const test1 = "SELECT id, name  ,      isHuman ";

const app = main(test1);
