import express, { Request, Response } from 'express';
import isAlgebraicNotation from './middlewares/isAlgebraicNotation';

const app = express();
const port = 8080;

app.get( "/", ( req: Request, res: Response ) => {
    res.send( "Hello world!" );
});

app.get( "/valid-moves", isAlgebraicNotation, ( req: Request, res: Response ) => {
    const { position, piece } = req.query;
    res.send(`Calculating moves for position = ${position} and piece = ${piece}`);
});

app.use((req: Request, res: Response, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});