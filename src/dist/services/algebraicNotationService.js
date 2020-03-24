"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ALGEBRAIC_NOTATION_PATTERN = /^[a-hA-H][1-8]$/;
const POSSIBLE_LETTERS = 'ABCDEFGH';
class AlgebraicNotationService {
    static isAlgebraicNotation(algebraicNotationPosition) {
        return ALGEBRAIC_NOTATION_PATTERN.test(algebraicNotationPosition);
    }
    static parsePositionToAlgebraicNotation(position) {
        return `${POSSIBLE_LETTERS.charAt(position.x)}${position.y + 1}`;
    }
    static parseAlgebraicNotationToPosition(algebraicNotationPosition) {
        return {
            x: POSSIBLE_LETTERS.indexOf(algebraicNotationPosition.charAt(0)),
            y: Number(algebraicNotationPosition.charAt(1)) - 1,
        };
    }
}
exports.default = AlgebraicNotationService;
//# sourceMappingURL=algebraicNotationService.js.map