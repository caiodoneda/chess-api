import { Request, Response, NextFunction } from 'express';
import AlgebraicNotationService from '../services/algebraicNotationService';

const isAlgebraicNotation = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    if (AlgebraicNotationService.isAlgebraicNotation(req.query.position)) {
        next();
    } else {
        res.status(400).send(
            'Bad request! The position should be in Algebraic notation. Upper case letters from A to H and numbers from 1 to 8.  Ex: (D4, A5, H8, A1, ...)'
        );
    }
};

export default isAlgebraicNotation;
