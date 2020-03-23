import React from 'react';
import Square from 'components/Square';
import 'css/ChessBoard.css';

export default class ChessBoard extends React.Component {
    state = {
        squares: [],
    };

    componentDidMount() {
        this.setState({ squares: this.createSquares(8) });
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

    render() {
        return <div className="ChessBoard"> {this.renderSquares()}</div>;
    }
}
