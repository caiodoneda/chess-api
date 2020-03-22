import Piece from '../interfaces/piece';
import { Position } from '../types';


export default class Knight implements Piece {
    position: Position;
    possibleMoves: Array<Position>;

    constructor(position: Position) {
        this.position = position;
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

    setPosition(position: Position): void {
        this.position = position;
    }
};