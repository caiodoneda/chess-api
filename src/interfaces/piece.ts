import { Position } from '../types';

export default interface Piece {
    position: Position,
    possibleMoves: Array<Position>,
    getPossibleMoves(): Array<Position>,
    setPosition(position: Position): void; 
};