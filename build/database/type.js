"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlCommand;
(function (sqlCommand) {
    sqlCommand[sqlCommand["SELECT"] = 0] = "SELECT";
    sqlCommand[sqlCommand["CREATE"] = 1] = "CREATE";
    sqlCommand[sqlCommand["UPDATE"] = 2] = "UPDATE";
    sqlCommand[sqlCommand["DELETE"] = 3] = "DELETE";
    sqlCommand[sqlCommand["WHERE"] = 4] = "WHERE";
})(sqlCommand || (sqlCommand = {}));
