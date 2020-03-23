"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isAlgebraicNotation_1 = __importDefault(require("./middlewares/isAlgebraicNotation"));
const boardService_1 = __importDefault(require("./services/boardService"));
const app = express_1.default();
const port = 8080;
app.get('/api/valid-moves', isAlgebraicNotation_1.default, (req, res) => {
    const { position = 'E4' } = req.query;
    const boardService = new boardService_1.default(position);
    const positionsAfterOneMove = boardService.getValidMoves();
    const positionsAfterTwoMoves = boardService.getValidMovesForPositions(positionsAfterOneMove);
    const response = {
        oneMove: positionsAfterOneMove,
        twoMoves: positionsAfterTwoMoves,
    };
    res.send(JSON.stringify(response));
});
app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map