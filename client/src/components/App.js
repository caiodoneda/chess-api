import React from 'react';
import ChessBoard from 'components/ChessBoard';
import ChessBoardLegend from 'components/ChessBoardLegend';
import 'css/App.css';

const VALID_MOVES_URL = 'api/valid-moves';
const POSSIBLE_LETTERS = 'ABCDEFGH';

const parsePositionToAlgebraicNotation = (position) =>
    `${POSSIBLE_LETTERS.charAt(position.x)}${position.y + 1}`;

const parseAlgebraicNotationToPosition = (algebraicNotationPosition) => ({
    x: POSSIBLE_LETTERS.indexOf(algebraicNotationPosition.charAt(0)),
    y: Number(algebraicNotationPosition.charAt(1)) - 1,
});

export default class App extends React.Component {
    state = {
        moves: {
            oneMove: [],
            twoMoves: [],
        },
        position: {},
    };

    fetchMoves = () => {
        const algebraicNotationPosition = parsePositionToAlgebraicNotation(
            this.state.position
        );

        fetch(
            `${VALID_MOVES_URL}?position=${algebraicNotationPosition}&piece=knight`
        )
            .then((response) => response.json())
            .then((moves) => {
                const parsedMoves = {
                    oneMove: moves.oneMove.map((move) =>
                        parseAlgebraicNotationToPosition(move)
                    ),
                    twoMoves: moves.twoMoves.map((move) =>
                        parseAlgebraicNotationToPosition(move)
                    ),
                };

                this.setState({ moves: parsedMoves });
            });
    };

    setPosition = (position) => {
        this.setState({ position, moves: { oneMove: [], twoMoves: [] } });
    };

    render() {
        return (
            <div className="App">
                <h2 className="App-title">
                    Welcome to valid chess moves (Knight)
                </h2>
                <div className="App-board">
                    <ChessBoard
                        setPosition={this.setPosition}
                        selectedPosition={this.state.position}
                        moves={this.state.moves}
                    />
                    <div>
                        <ChessBoardLegend />
                        <button
                            className="App-fetchButton"
                            onClick={this.fetchMoves}
                        >
                            Calculate Valid Moves
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
