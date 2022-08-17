import { Request, Response } from "express";
import { boardGames } from "./server";

export function getAllObjects(req: Request, res: Response) {
  res.status(200).json(boardGames);
}

export function getObjectById(req: Request, res: Response) {
  const boardGame = boardGames.find((x) => x.id === req.params.id);
  if (boardGame) {
    res.status(200).json(boardGame);
  } else {
    res.status(204).json("Not found");
  }
}

export const postObject = (req: Request, res: Response) => {
  const data = req.body;
  res.status(200).json(data);
  boardGames.push(data);
};

export function deleteAllObjects(req: Request, res: Response) {
  res.status(200).json(boardGames.splice(0, boardGames.length));
}
