"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Knight {
    constructor() {
        this.possibleMoves = [
            { x: 2, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: -1 },
            { x: 1, y: -2 },
            { x: -2, y: 1 },
            { x: -1, y: 2 },
            { x: -2, y: -1 },
            { x: -1, y: -2 },
        ];
    }
    getPossibleMoves() {
        return this.possibleMoves;
    }
}
exports.default = Knight;
//# sourceMappingURL=knight.js.map