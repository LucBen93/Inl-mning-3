import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { BoardGame, boardGames } from "./boardgame.model";

export function getAllObjects(req: Request, res: Response) {
  if (boardGames.length < 1) {
    res.status(404).json(boardGames);
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
  let boardGame: BoardGame = {
    id: nanoid(20),
    name: req.body.name,
    description: req.body.description,
    published: req.body.published,
  };
  boardGames.push(boardGame);
  res.status(200).json(boardGame);
};

export function deleteAllObjects(req: Request, res: Response) {
  if (boardGames.length < 1) {
    res.status(404).json("You cannot delete what is already deleted");
  } else boardGames.splice(0, boardGames.length);
  res.status(204).send();
}

export function deleteObjectById(req: Request, res: Response) {
  const boardGame = boardGames.find((x) => x.id === req.params.id);
  if (boardGame) {
    const boardGameIndex = boardGames.indexOf(boardGame);
    boardGames.splice(boardGameIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json("Not found");
  }
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
