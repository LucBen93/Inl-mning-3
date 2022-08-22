import express from "express";
import {
  deleteAllObjects,
  getAllObjects,
  getObjectById,
  postObject,
  updateObject,
} from "./api.controller";

const app = express();
app.use(express.json());

app.get("/api", getAllObjects);
app.get("/api/:id", getObjectById);
app.post("/api", postObject);
app.delete("/api", deleteAllObjects);
app.put("/api/:id", updateObject);

app.listen(3000, () => console.log("Running on http://localhost:3000"));
