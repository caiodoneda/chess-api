import Board from '../../models/board';
import Knight from '../../models/knight';
import { Position } from '../../types';

describe('The Board model', () => {
    const piece = new Knight();
    describe('Creation', () => {
        test('should throw an error when passing an invalid position', () => {
            const invalidPosition = { x: 8, y: 8 };
            const boardSize = 8;

            expect(() => {
                new Board(piece, invalidPosition, boardSize);
            }).toThrow();
        });
    });

    describe('The valid positions in the chess board', () => {
        const initialPosition = { x: 0, y: 0 };

        test.each([
            [8, 1, 2, true],
            [8, 0, 0, true],
            [8, 0, 1, true],
            [8, 0, 1, true],
            [8, 8, 7, false],
            [8, 7, 8, false],
            [8, 8, 8, false],
        ])(
            'boardSize = %i, position: (%i, %i), expected: %s',
            (boardSize: number, x: number, y: number, expected: boolean) => {
                const position: Position = { x, y };
                const board = new Board(piece, initialPosition, boardSize);
                expect(board.isValidPosition(position)).toBe(expected);
            }
        );
    });

    describe('The knight valid moves for a given position', () => {
        test.each([
            [
                4,
                3,
                [
                    { x: 6, y: 4 },
                    { x: 5, y: 5 },
                    { x: 6, y: 2 },
                    { x: 5, y: 1 },
                    { x: 2, y: 4 },
                    { x: 3, y: 5 },
                    { x: 2, y: 2 },
                    { x: 3, y: 1 },
                ],
            ],
            [
                0,
                0,
                [
                    { x: 2, y: 1 },
                    { x: 1, y: 2 },
                ],
            ],
            [
                7,
                0,
                [
                    { x: 5, y: 1 },
                    { x: 6, y: 2 },
                ],
            ],
            [
                7,
                7,
                [
                    { x: 5, y: 6 },
                    { x: 6, y: 5 },
                ],
            ],
            [
                0,
                7,
                [
                    { x: 2, y: 6 },
                    { x: 1, y: 5 },
                ],
            ],
        ])(
            'boardSize = 8 initial position: (%i, %i)',
            (x: number, y: number, expected: Position[]) => {
                const initialPosition: Position = { x, y };
                const board = new Board(piece, initialPosition);
                expect(board.getValidMovesForPiece()).toStrictEqual(expected);
            }
        );
    });
});
