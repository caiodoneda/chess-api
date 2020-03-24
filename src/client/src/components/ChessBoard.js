import React from 'react';
import Square from 'components/Square';
import 'css/ChessBoard.css';

const BOARD_DEFAULT_SIZE = 8;

export default class ChessBoard extends React.Component {
    state = {
        squares: [],
    };

    componentDidMount() {
        this.setState({ squares: this.createSquares(BOARD_DEFAULT_SIZE) });
    }

    onSquareClick(position) {
        this.props.setPosition(position);
    }

    isOdd(number) {
        return number % 2 !== 0;
    }

    isSelected(position) {
        return (
            this.props.selectedPosition &&
            this.props.selectedPosition === position
        );
    }

    createSquares(boardSize) {
        const squares = [];

        for (let y = boardSize - 1; y >= 0; y--) {
            for (let x = 0; x < boardSize; x++) {
                const currentPosition = { x, y };
                squares.push({
                    key: `${x}-${y}`,
                    blackSquare: this.isOdd(x + y),
                    position: currentPosition,
                });
            }
        }
        return squares;
    }

    isPositionEqual = (p1, p2) => p1.x === p2.x && p1.y === p2.y;

    isPositionInMovesArray = (position, moves) =>
        moves.find((move) => this.isPositionEqual(move, position)) !==
        undefined;

    getSquareStyling = (position) => {
        if (this.isSelected(position)) {
            return 'selected';
        }

        if (this.isPositionInMovesArray(position, this.props.moves.twoMoves)) {
            return 'twoMoves';
        }

        if (this.isPositionInMovesArray(position, this.props.moves.oneMove)) {
            return 'oneMove';
        }

        return '';
    };

    renderSquares = () => {
        return this.state.squares.map((square) => {
            return (
                <Square
                    key={square.key}
                    onClick={() => this.onSquareClick(square.position)}
                    blackSquare={square.blackSquare}
                    styling={this.getSquareStyling(square.position)}
                />
            );
        });
    };

    renderHelperLetters = () => {
        return (
            <div className="ChessBoard-lettersContainer">
                <div className="ChessBoard-letters">A</div>
                <div className="ChessBoard-letters">B</div>
                <div className="ChessBoard-letters">C</div>
                <div className="ChessBoard-letters">D</div>
                <div className="ChessBoard-letters">E</div>
                <div className="ChessBoard-letters">F</div>
                <div className="ChessBoard-letters">G</div>
                <div className="ChessBoard-letters">H</div>
            </div>
        );
    };

    renderHelperNumbers = () => {
        return (
            <div className="ChessBoard-numbersContainer">
                <div className="ChessBoard-numbers">1</div>
                <div className="ChessBoard-numbers">2</div>
                <div className="ChessBoard-numbers">3</div>
                <div className="ChessBoard-numbers">4</div>
                <div className="ChessBoard-numbers">5</div>
                <div className="ChessBoard-numbers">6</div>
                <div className="ChessBoard-numbers">7</div>
                <div className="ChessBoard-numbers">8</div>
            </div>
        );
    };

    render() {
        return (
            <div className="ChessBoard">
                {this.renderHelperLetters()}
                <div className="ChessBoard-squaresContainer">
                    {this.renderHelperNumbers()}
                    <div className="ChessBoard-squares">
                        {this.renderSquares()}
                    </div>
                    {this.renderHelperNumbers()}
                </div>
                {this.renderHelperLetters()}
            </div>
        );
    }
}
