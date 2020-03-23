"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const algebraicNotationService_1 = __importDefault(require("../services/algebraicNotationService"));
const isAlgebraicNotation = (req, res, next) => {
    if (algebraicNotationService_1.default.isAlgebraicNotation(req.query.position)) {
        next();
    }
    else {
        res.status(400).send('Bad request! Position should be in Algebraic notation (D4, A5, H8, A1, ...)');
    }
};
exports.default = isAlgebraicNotation;
//# sourceMappingURL=isAlgebraicNotation.js.map