import Piece from '../interfaces/piece';
import { Position } from '../types';

export default class Knight implements Piece {
    _possibleMoves: Position[];

    constructor() {
        this._possibleMoves = [
            { x: 2, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: -1 },
            { x: 1, y: -2 },
            { x: -2, y: 1 },
            { x: -1, y: 2 },
            { x: -2, y: -1 },
            { x: -1, y: -2 },
        ];
    }

    get possibleMoves(): Position[] {
        return this._possibleMoves;
    }
}
