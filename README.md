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

