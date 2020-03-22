import Piece from '../interfaces/piece';
import { Position } from '../types';

type BoardPositions = number[][];

export default class Board {
    private size: number
    private boardPositions: BoardPositions;
    private piece: Piece;
    private piecePosition: Position;

    constructor(piece: Piece, piecePosition: Position, size = 8) {
        this.size = size;
        this.piece = piece;
        this.piecePosition = piecePosition;
    }

    setPiecePosition(position: Position): void {
        this.piecePosition = position;
    }

    getValidMovesForPiece(): Position[] {
        return this.piece.getPossibleMoves()
            .map(moves => ({
                x: this.piecePosition.x + moves.x,
                y: this.piecePosition.y + moves.y,
            }))
            .filter(position => this.isValidPosition(position));
    }

    isValidPosition(position: Position): boolean {
        const upperBound = this.size - 1;
        const lowerBound = 0;
        return (position.x >= lowerBound && position.x <= upperBound) && 
            (position.y >= lowerBound && position.y <= upperBound);
    }
};