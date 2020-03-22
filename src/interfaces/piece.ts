import { Position } from '../types';

export default interface Piece {
    possibleMoves: Position[],
    getPossibleMoves(): Position[],
};