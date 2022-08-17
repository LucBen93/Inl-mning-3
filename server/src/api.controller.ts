import { Request, Response } from "express";
import { boardGames } from "./server";

export function getAllObjects(req: Request, res: Response) {
  res.status(200).json(boardGames);
}

export const postObject = (req: Request, res: Response) => {
  const data = req.body;
  res.status(200).json(data);
  boardGames.push(data);
};
