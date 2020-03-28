import Piece from '../interfaces/piece';
import { Position } from '../types';

export default class Board {
    private _size: number;
    private _piece: Piece;
    private _piecePosition: Position;

    constructor(piece: Piece, piecePosition: Position, size = 8) {
        this._size = size;
        this._piece = piece;

        if (!this.isValidPosition(piecePosition))
            throw new Error('Invalid position');
        this._piecePosition = piecePosition;
    }

    setPiecePosition(position: Position) {
        if (!this.isValidPosition(position))
            throw new Error('Invalid position');
        this._piecePosition = position;
    }

    getValidMovesForPiece(): Position[] {
        return this._piece._possibleMoves
            .map((moves) => ({
                x: this._piecePosition.x + moves.x,
                y: this._piecePosition.y + moves.y,
            }))
            .filter((position) => this.isValidPosition(position));
    }

    isValidPosition(position: Position): boolean {
        const upperBound = this._size - 1;
        const lowerBound = 0;
        return (
            position.x >= lowerBound &&
            position.x <= upperBound &&
            position.y >= lowerBound &&
            position.y <= upperBound
        );
    }
}
