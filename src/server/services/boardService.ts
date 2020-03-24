import Board from '../models/board';
import Knight from '../models/knight';
import AlgebraicNotationService from '../services/algebraicNotationService';
import { AlgebraicNotation } from '../types';

export default class BoardService {
    private board: Board;

    constructor(algebraicNotationPosition: AlgebraicNotation) {
        const position = AlgebraicNotationService.parseAlgebraicNotationToPosition(
            algebraicNotationPosition
        );
        const piece = new Knight();
        this.board = new Board(piece, position);
    }

    getValidMoves(): AlgebraicNotation[] {
        const validMoves = this.board.getValidMovesForPiece();
        return validMoves.map((position) =>
            AlgebraicNotationService.parsePositionToAlgebraicNotation(position)
        );
    }

    getValidMovesForPositions(
        algebraicNotationPositions: AlgebraicNotation[]
    ): AlgebraicNotation[] {
        const validMoves = algebraicNotationPositions.flatMap(
            (algebraicNotationPosition: AlgebraicNotation) => {
                const position = AlgebraicNotationService.parseAlgebraicNotationToPosition(
                    algebraicNotationPosition
                );
                this.board.setPiecePosition(position);
                return this.getValidMoves();
            }
        );

        return [...new Set(validMoves)];
    }
}
