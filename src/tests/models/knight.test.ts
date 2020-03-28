import Knight from '../../models/knight';

describe('The Knight model', () => {
    describe('Possible moves', () => {
        test('should return possible moves', () => {
            const piece = new Knight();
            expect(piece._possibleMoves).toStrictEqual([
                { x: 2, y: 1 },
                { x: 1, y: 2 },
                { x: 2, y: -1 },
                { x: 1, y: -2 },
                { x: -2, y: 1 },
                { x: -1, y: 2 },
                { x: -2, y: -1 },
                { x: -1, y: -2 },
            ]);
        });
    });
});
