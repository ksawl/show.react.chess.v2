import { Dispatch } from 'react';
import { BoardActions } from '../../../types/typesBoard/typesBoardActions';
import { BoardCell } from '../../../types/typesBoard/typesBoardState';
import { RootReducer } from '../../reducers';
import boardCheckmateAction from './boardCheckmateAction';
import boardMakeMoveAction from './boardMakeMoveAction';
import boardMovesAction from './boardMovesAction';
import boardSetSelectedAction from './boardSetSelectedAction';

const cellClickAction = (curentCell: BoardCell): Function => {
  return (
    dispatch: Dispatch<BoardActions | Function>,
    getState: Function,
  ): void => {
    const { chess } = getState() as RootReducer;

    dispatch(boardSetSelectedAction(curentCell.name));
    dispatch(boardMovesAction(curentCell.name));
    dispatch(boardMakeMoveAction(curentCell.name));
    dispatch(boardCheckmateAction());

  };
};

export default cellClickAction;
