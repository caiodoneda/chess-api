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

    handleSquareSelected(position) {
        this.setState({ selectedPosition: position });
    }

    isOdd(number) {
        return number % 2 !== 0;
    }

    isSelected(position) {
        return (
            this.state.selectedPosition &&
            this.state.selectedPosition == position
        );
    }

    createSquares(boardSize) {
        const squares = [];

        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const currentPosition = { i, j };
                squares.push({
                    key: `${i}-${j}`,
                    blackSquare: this.isOdd(i + j),
                    position: currentPosition,
                });
            }
        }
        return squares;
    }

    renderSquares() {
        return this.state.squares.map((square) => (
            <Square
                key={square.key}
                onClick={() => this.handleSquareSelected(square.position)}
                blackSquare={square.blackSquare}
                selected={this.isSelected(square.position)}
            />
        ));
    }

    render() {
        return <div className="ChessBoard"> {this.renderSquares()}</div>;
    }
}
