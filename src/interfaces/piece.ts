import { Position } from '../types';

export default interface Piece {
    readonly _possibleMoves: Position[];
}
