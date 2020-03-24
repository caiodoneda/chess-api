"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = __importDefault(require("../models/board"));
const knight_1 = __importDefault(require("../models/knight"));
const algebraicNotationService_1 = __importDefault(require("../services/algebraicNotationService"));
class BoardService {
    constructor(algebraicNotationPosition) {
        const position = algebraicNotationService_1.default.parseAlgebraicNotationToPosition(algebraicNotationPosition);
        const piece = new knight_1.default();
        this.board = new board_1.default(piece, position);
    }
    getValidMoves() {
        const validMoves = this.board.getValidMovesForPiece();
        return validMoves.map((position) => algebraicNotationService_1.default.parsePositionToAlgebraicNotation(position));
    }
    getValidMovesForPositions(algebraicNotationPositions) {
        const validMoves = algebraicNotationPositions.flatMap((algebraicNotationPosition) => {
            const position = algebraicNotationService_1.default.parseAlgebraicNotationToPosition(algebraicNotationPosition);
            this.board.setPiecePosition(position);
            return this.getValidMoves();
        });
        return [...new Set(validMoves)];
    }
}
exports.default = BoardService;
//# sourceMappingURL=boardService.js.map