import express from "express";
import boardGameRouter from "./boardgame/boardgame.router";

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/boardgame", boardGameRouter);

app.listen(3000, () => console.log("Running on http://localhost:3000"));
