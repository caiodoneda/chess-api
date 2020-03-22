import { Position } from '../types';

export default interface Piece {
    possibleMoves: Array<Position>,
    getPossibleMoves(): Array<Position>,
};