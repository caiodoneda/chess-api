import { AlgebraicNotation, Position } from '../types';

const ALGEBRAIC_NOTATION_PATTERN = /^[a-hA-H][1-8]$/;
const POSSIBLE_LETTERS = "ABCDEFGH";

export default class AlgebraicNotationService {
    static isAlgebraicNotation(algebraicNotationPosition: AlgebraicNotation): boolean {
        return ALGEBRAIC_NOTATION_PATTERN.test(algebraicNotationPosition);
    }

    static parsePositionToAlgebraicNotation(position: Position): AlgebraicNotation {
        return `${POSSIBLE_LETTERS.charAt(position.y)}${position.x + 1}`;
    }

    static parseAlgebraicNotationToPosition(algebraicNotationPosition: AlgebraicNotation): Position {
        return {
            x: Number(algebraicNotationPosition.charAt(1)),
            y: POSSIBLE_LETTERS.indexOf(algebraicNotationPosition.charAt(0)),
        };
    }
}