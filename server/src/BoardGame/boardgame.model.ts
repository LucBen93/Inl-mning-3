export const boardGames: BoardGame[] = [];

export interface BoardGame {
  id: string;
  name: string;
  description: string;
  published: number;
}
