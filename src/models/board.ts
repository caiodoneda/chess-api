import Piece from '../interfaces/piece';
import { Position } from '../types';

type BoardPositions = Array<Array<number>>;

export default class Board {
    private boardPositions: BoardPositions;
    private piece: Piece;

    constructor(piece: Piece, size = 8) {
        const rows = Array(size).fill(0);
        this.boardPositions = Array(size).fill(rows);
        this.piece = piece;
    }

    getValidMovesForPiece(): BoardPositions {
        return [[]];
    }
};