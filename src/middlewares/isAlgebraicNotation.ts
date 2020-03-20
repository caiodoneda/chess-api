import { Request, Response, NextFunction } from 'express';
const ALGEBRAIC_NOTATION_PATTERN = /^[a-hA-H][1-8]$/;

const isAlgebraicNotation = (req: Request, res: Response, next: NextFunction) => {
    const { position } = req.query;
    if (ALGEBRAIC_NOTATION_PATTERN.test(position)) {
        next();
    } else {
        res.status(400).send('Bad request! Position should be in Algebraic notation (D4, A5, H8, A1, ...)');
    }
}

export default isAlgebraicNotation;