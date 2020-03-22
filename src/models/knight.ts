import Piece from '../interfaces/piece';
import { Position } from '../types';


export default class Knight implements Piece {
    possibleMoves: Array<Position>;

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
    
    getPossibleMoves(): Array<Position> {
        return this.possibleMoves;
    }
};