import express from "express";
import db from "./db/connection";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// app.use("/", routes)

const PORT = process.env.PORT || 3000;

db.on("connected", () => {
  console.clear();
  console.log(chalk.cyan.bgMagentaBright("Connected to MongoDB"));

  app.listen(PORT, () => {
    console.log(chalk.yellowBright(`Express server running on port ${PORT}`));
  });
});
