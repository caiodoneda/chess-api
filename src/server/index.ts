import express, { Request, Response } from 'express';
import path from 'path';
import isAlgebraicNotation from './middleware/isAlgebraicNotation';
import BoardService from './services/boardService';

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '/public')));
console.log(path.join(__dirname, 'public'));
app.get(
    '/api/valid-moves',
    isAlgebraicNotation,
    (req: Request, res: Response) => {
        const { position = 'E4' } = req.query;
        const boardService = new BoardService(position);
        const positionsAfterOneMove = boardService.getValidMoves();
        const positionsAfterTwoMoves = boardService.getValidMovesForPositions(
            positionsAfterOneMove
        );
        const response = {
            oneMove: positionsAfterOneMove,
            twoMoves: positionsAfterTwoMoves,
        };

        res.send(JSON.stringify(response));
    }
);

app.use((req: Request, res: Response) => {
    res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
