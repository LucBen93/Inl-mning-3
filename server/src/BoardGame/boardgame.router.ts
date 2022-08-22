import express from "express";
import {
  deleteAllObjects,
  getAllObjects,
  getObjectById,
  postObject,
  updateObject,
} from "./boardgame.controller";

const boardGameRouter = express.Router();
boardGameRouter.get("/", getAllObjects);
boardGameRouter.get("/:id", getObjectById);
boardGameRouter.post("/", postObject);
boardGameRouter.put("/:id", updateObject);
boardGameRouter.delete("/", deleteAllObjects);

export default boardGameRouter;
