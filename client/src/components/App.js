import React from 'react';
import ChessBoard from 'components/ChessBoard';
import 'css/App.css';

export default class App extends React.Component {
    state = {
        moves: [],
    };

    componentDidMount() {
        fetch('api/valid-moves?position=E4&piece=knight')
            .then((response) => response.json())
            .then((data) => this.setState({ moves: data }));
    }

    render() {
        return (
            <div className="App">
                <ChessBoard />
            </div>
        );
    }
}
