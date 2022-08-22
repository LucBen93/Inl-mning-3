import { Request, Response } from "express";

const boardGames: BoardGame[] = [];

interface BoardGame {
  id: string;
  name: string;
  description: string;
  published: number;
}

export function getAllObjects(req: Request, res: Response) {
  if (boardGames.length < 1) {
    res.status(404).json("Nah, man. This be empty");
  } else res.status(200).json(boardGames);
}

export function getObjectById(req: Request, res: Response) {
  const boardGame = boardGames.find((x) => x.id === req.params.id);
  if (boardGame) {
    res.status(200).json(boardGame);
  } else {
    res.status(404).json("Not found");
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

export function updateObject(req: Request, res: Response) {
  const id = req.params.id;
  const boardGame = boardGames.find((x) => x.id === id);
  if (boardGame) {
    const boardGameIndex = boardGames.indexOf(boardGame);
    boardGames[boardGameIndex] = { id, ...req.body };
    res.status(200).json(boardGames[boardGameIndex]);
  } else res.status(404).json("Board game not found");
}
