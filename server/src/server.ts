import express from "express";
import boardGameRouter from "./BoardGame/boardgame.router";

const app = express();
app.use(express.json());

app.use("/api/boardgame", boardGameRouter);

app.listen(3000, () => console.log("Running on http://localhost:3000"));
