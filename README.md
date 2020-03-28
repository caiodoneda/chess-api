# Valid chess moves API

Valid chess moves is an API written with Express + typescript that calculates all the possible moves for the knight chess piece for a given position.

# Project structure

    ├── dist                    # Compiled files
    ├── src                     # Source files
        ├── interfaces          
        ├── middleware          
        ├── models              
        ├── services         
        ├── tests               # Automated tests
        ├── types               # Application type definitions
    ├── jest.config.js          # Jest's configuration file
    ├── tsconfig.json           # Specifies the root files and the compiler options required to compile the project.
    └── README.md

# Available endpoints

GET: api/valid-moves.

Params: position (Algebraic notation, E4, G6, A1...)

Response: Object containing all valid moves after 1 move and 2 moves.
    
Ex: ***api/valid-moves?position=E4***
```
{
    "oneMove": ["G5","F6","G3","F2","C5","D6","C3","D2"]
    "twoMoves": ["H7","H3","E6","F7","E4","F3","G8","H5","G4","D7","E8","D5","H1","F5","E2","F1","D3","D1","A6","B7","A4","B3","C8","B5","C4","A2","B1"]
}
```

# How it works

The knight is currently the only piece available and its model knows all the possible moves for this piece.

When a request to the API is made, there's a validation for position param.

It was created a middleware called `isAlgebraicNotation` that uses the service `AlgebraicNotationService` to check if the position param is written in the Algebrainc notation form. 

i.e one letter (from A to H) followed by one number (from 1 to 8).

The `AlgebraicNotationService` is also responsible for transforming the position from the algebraic notation (A5, H3, E4...) to a coordinate `({x: 2, y: 3})` and vice versa.

If the position is not valid, it is sent a "bad request" response to the client.

If the position is well formed, the boardService will be responsible for calculating all the valid moves after one and two moves. 

The response is then created, serialized and sent to the client.

# Algorithm explained
When the Board class is instantiated, it receives a piece and the piece position.

The method `getValidMovesForPiece` will calculate all the possible moves for that spefic piece based on its current position on the board.

For instance, let's suppose we want to calculate all the valid moves for the knight piece that's positioned in the following coordinates.
`{ x: 4,  y: 3 }`

A knight can move either 2 squares horizontally and 1 square vertically OR 2 squares vertically and 1 square horizontally.
And the following coordinates are used to represent all the possibilities.
```
{ x: 2, y: 1 }
{ x: 1, y: 2 }
{ x: 2, y: -1 }
{ x: 1, y: -2 }
{ x: -2, y: 1 }
{ x: -1, y: 2 }
{ x: -2, y: -1 }
{ x: -1, y: -2 }
```

The algorithm will basically iterate over all the possible moves, sum the coordinates of the current position with the coordinates of each move and return the new array. 

Ex: `{ x: 4,  y: 3 }` +  `{ x: 2, y: 1 }` = `{ x: 6, y: 4 }`

After that, all the invalid positions are filtered out from the array.

An invalid position is a positions that's outside the board. 
Ex: In a 8x8 board, the position { x: 9, y: 4 } is invalid.

subsequently, the positions are converted back to the algebrainc notation.

Since we also want to calculate the valid positions after two moves, the algorithm is called again for each postion returned in the first iteration. 
