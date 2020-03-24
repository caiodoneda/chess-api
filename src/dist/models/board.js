"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Board {
    constructor(piece, piecePosition, size = 8) {
        this.size = size;
        this.piece = piece;
        this.piecePosition = piecePosition;
    }
    setPiecePosition(position) {
        this.piecePosition = position;
    }
    getValidMovesForPiece() {
        return this.piece
            .getPossibleMoves()
            .map((moves) => ({
            x: this.piecePosition.x + moves.x,
            y: this.piecePosition.y + moves.y,
        }))
            .filter((position) => this.isValidPosition(position));
    }
    isValidPosition(position) {
        const upperBound = this.size - 1;
        const lowerBound = 0;
        return (position.x >= lowerBound &&
            position.x <= upperBound &&
            position.y >= lowerBound &&
            position.y <= upperBound);
    }
}
exports.default = Board;
//# sourceMappingURL=board.js.map