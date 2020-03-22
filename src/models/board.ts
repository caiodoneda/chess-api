import Piece from '../interfaces/piece';
import { Position } from '../types';

type BoardPositions = number[][];

export default class Board {
    private boardPositions: BoardPositions;
    private piece: Piece;
    private piecePosition: Position;

    constructor(piece: Piece, piecePosition: Position, size = 8) {
        const rows = Array(size).fill(0);
        this.boardPositions = Array(size).fill(rows);
        this.piece = piece;
        this.piecePosition = piecePosition;
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
        return this.boardPositions.length >= position.x &&
            this.boardPositions[position.x].length >= position.y;
    }
};