import AlgebraicNotationService from '../../services/algebraicNotationService';
import { AlgebraicNotation } from 'src/types';

describe('The Algebraic Notation service', () => {
    test.each([
        ['G5', 6, 4],
        ['A1', 0, 0],
        ['E4', 4, 3],
        ['H5', 7, 4],
        ['G8', 6, 7],
    ])(
        'Algebraic Notation Position = %s ---> position: (%i, %i)',
        (
            algebraicNotationPosition: AlgebraicNotation,
            x: number,
            y: number
        ) => {
            const parsedPosition = AlgebraicNotationService.parseAlgebraicNotationToPosition(
                algebraicNotationPosition
            );
            expect(parsedPosition).toStrictEqual({ x, y });
        }
    );

    test.each([
        [6, 4, 'G5'],
        [0, 0, 'A1'],
        [4, 3, 'E4'],
        [7, 4, 'H5'],
        [6, 7, 'G8'],
    ])(
        'position: (%i, %i) ----> Algebraic Notation Position = %s ',
        (
            x: number,
            y: number,
            algebraicNotationPosition: AlgebraicNotation
        ) => {
            const parsedPosition = AlgebraicNotationService.parsePositionToAlgebraicNotation(
                { x, y }
            );
            expect(parsedPosition).toStrictEqual(algebraicNotationPosition);
        }
    );
});
