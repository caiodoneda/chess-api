import Board from '../models/board';
import Knight from '../models/knight';
import AlgebraicNotationService from '../services/algebraicNotationService';
import { AlgebraicNotation } from '../types';

export default class BoardService {
    private board: Board;

    constructor(albebraicNotationPosition: AlgebraicNotation) {
        const postion = AlgebraicNotationService.parseAlgebraicNotationToPosition(
            albebraicNotationPosition
        );
        const piece = new Knight();
        this.board = new Board(piece, postion);
    }

    getValidMoves(): AlgebraicNotation[] {
        const validMoves = this.board.getValidMovesForPiece();
        return validMoves.map((position) =>
            AlgebraicNotationService.parsePositionToAlgebraicNotation(position)
        );
    }

    getValidMovesForPositions(
        albebraicNotationPositions: AlgebraicNotation[]
    ): AlgebraicNotation[] {
        const validMoves = albebraicNotationPositions.flatMap(
            (albebraicNotationPosition) => {
                const position = AlgebraicNotationService.parseAlgebraicNotationToPosition(
                    albebraicNotationPosition
                );
                this.board.setPiecePosition(position);
                return this.getValidMoves();
            }
        );

        return [...new Set(validMoves)];
    }
}
