import express, { Request, Response, NextFunction } from 'express';
import isAlgebraicNotation from './middlewares/isAlgebraicNotation';
import BoardService from './services/boardService';

const app = express();
const port = 8080;

app.get( "/", ( req: Request, res: Response ) => {
    res.send( "Hello world!" );
});

app.get( "/valid-moves", isAlgebraicNotation, ( req: Request, res: Response ) => {
    const { position = "E4", piece = "knight" } = req.query;
    const boardService = new BoardService(position);
    const positionsAfterOneMove = boardService.getValidMoves();
    const positionsAfterTwoMoves = boardService.getValidMovesForPositions(positionsAfterOneMove);
    const response = {
        oneMove: positionsAfterOneMove,
        twoMoves: positionsAfterTwoMoves
    };

    res.send(JSON.stringify(response));
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});