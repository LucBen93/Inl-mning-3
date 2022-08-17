import express from "express";
import {
  getAllObjects,
  getObjectById,
  postObject,
  deleteAllObjects,
} from "./api.controller";

const app = express();
app.use(express.json());

export const boardGames: BoardGame[] = [];

interface BoardGame {
  id: string;
  name: string;
  description: string;
  published: number;
}

app.get("/api", getAllObjects);
app.get("/api/:id", getObjectById);
app.post("/api", postObject);
app.delete("/api", deleteAllObjects);

app.listen(3000, () => console.log("Running on http://localhost:3000"));
