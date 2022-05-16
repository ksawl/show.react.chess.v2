import { IBoardState } from './typesBoardState';

/** ACTIONS */
export enum BoardActionTypes {
  BOARD_ITEM = 'BOARD_ITEM',
  BOARD_PARSE_FEN = 'BOARD_PARSE_FEN',
  BOARD_FEN = 'BOARD_FEN',
  BOARD_KINGS = 'BOARD_KINGS',
  BOARD_TURN = 'BOARD_TURN',
  BOARD_CASTLING = 'BOARD_CASTLING',
  BOARD_EP_SQUARE = 'BOARD_EP_SQUARE',
  BOARD_HALF_MOVES = 'BOARD_HALF_MOVES',
  BOARD_MOVE_NUMBER = 'BOARD_MOVE_NUMBER',
  BOARD_HISTORY = 'BOARD_HISTORY',
  BOARD_HEADER = 'BOARD_HEADER',
  BOARD_COMMENTS = 'BOARD_COMMENTS',
}

interface BoardItemAction {
  type: BoardActionTypes.BOARD_ITEM;
  board: IBoardState['board'];
}
interface BoardFenAction {
  type: BoardActionTypes.BOARD_FEN;
  fen: IBoardState['fen'];
}
interface BoardKingsAction {
  type: BoardActionTypes.BOARD_KINGS;
  kings: IBoardState['kings'];
}
interface BoardTurnAction {
  type: BoardActionTypes.BOARD_TURN;
  turn: IBoardState['turn'];
}
interface BoardCastlingAction {
  type: BoardActionTypes.BOARD_CASTLING;
  castling: IBoardState['castling'];
}
interface BoardEpSquareAction {
  type: BoardActionTypes.BOARD_EP_SQUARE;
  epSquare: IBoardState['ep_square'];
}
interface BoardHalfMovesAction {
  type: BoardActionTypes.BOARD_HALF_MOVES;
  halfMoves: IBoardState['half_moves'];
}
interface BoardMoveNumberAction {
  type: BoardActionTypes.BOARD_MOVE_NUMBER;
  moveNumber: IBoardState['move_number'];
}
interface BoardHistoryAction {
  type: BoardActionTypes.BOARD_HISTORY;
  history: IBoardState['history'];
}
interface BoardHeaderAction {
  type: BoardActionTypes.BOARD_HEADER;
  header: IBoardState['header'];
}
interface BoardCommentsAction {
  type: BoardActionTypes.BOARD_COMMENTS;
  comments: IBoardState['comments'];
}

export type BoardActions =
  | BoardItemAction
  | BoardFenAction
  | BoardKingsAction
  | BoardTurnAction
  | BoardCastlingAction
  | BoardEpSquareAction
  | BoardHalfMovesAction
  | BoardMoveNumberAction
  | BoardHistoryAction
  | BoardHeaderAction
  | BoardCommentsAction;
