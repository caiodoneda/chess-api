import Piece from '../interfaces/piece';
import { Position } from '../types';


export default class Knight implements Piece {
    possibleMoves: Position[];

    constructor() {
        this.possibleMoves = [
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

    getPossibleMoves(): Position[] {
        return this.possibleMoves;
    }
};