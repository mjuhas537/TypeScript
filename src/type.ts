enum sqlCommand {
  SELECT,
  CREATE,
  UPDATE,
  DELETE,
  WHERE,
}

export type sqlCommands = keyof typeof sqlCommand;

export type item = {
  id: number;
  name: string;
  year: number;
  isHuman: boolean;
  job: [string];
};

export type database = item[];

export enum errorMessage {
  Error = `Error message: Bad queries`,
}
