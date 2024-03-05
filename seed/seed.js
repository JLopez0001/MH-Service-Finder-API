import db from "../db/connection.js";
import Center from "../models/mentalHealthCenter.js";
import data from "./servicesFinder.json" assert { type: "json" };
import chalk from "chalk";

async function insertData() {
  //Reset DB
  await db.dropDatabase();

  //Insert Data
  let createdData = await Center.create(data);
  console.log(
    chalk.cyanBright.bgMagenta(`Done! We created ${createdData.length} centers`)
  );

  //Close DB Connection
  await db.close();
}

insertData();
