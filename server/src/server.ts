import express from "express";
import { getAllObjects, postObject } from "./api.controller";

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
app.post("/api", postObject);

app.listen(3000, () => console.log("Running on http://localhost3000"));
