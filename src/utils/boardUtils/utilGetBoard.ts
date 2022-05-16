import {
  BoardCell,
  BoardItem,
  SQUARES,
} from '../../types/typesBoard/typesBoardState';

/**
 * Calculating the Display Board
 * @implements Chess.board()
 * @param {BoardItem[]} board = BoardItem[]
 * @returns {BoardCell[][]} BoardCell[][]
 */
const getBoard = (board: BoardItem[]): BoardCell[][] => {
  const calculateBoard: BoardCell[][] = [];
  let row: BoardCell[] = [];
  let x = 0;
  let y = 0;

  for (let i = SQUARES.a8; i <= SQUARES.h1; i++) {
    row.push({
      name: i,
      x,
      y,
      figure: board[i],
      selected: false,
      available: false,
    });
    x++;

    if ((i + 1) & 0x88) {
      calculateBoard.push(row);
      row = [];
      i += 8;
      x = 0;
      y++;
    }
  }

  return calculateBoard;
};

export const utilGetBoard = {
  getBoard,
};
