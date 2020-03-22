import { Request, Response, NextFunction } from 'express';
import AlgebraicNotationService from '../services/algebraicNotationService';

const isAlgebraicNotation = (req: Request, res: Response, next: NextFunction) => {
    if (AlgebraicNotationService.isAlgebraicNotation(position)) {
        next();
    } else {
        res.status(400).send('Bad request! Position should be in Algebraic notation (D4, A5, H8, A1, ...)');
    }
}

export default isAlgebraicNotation;