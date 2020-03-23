import React from 'react';
import 'css/App.css';

export default class App extends React.Component {
    state = {
        moves: [],
    };

    componentDidMount() {
        console.log('here');
        fetch('api/valid-moves?position=E4&piece=knight')
            .then((response) => response.json())
            .then((data) => this.setState({ moves: data }));
    }

    render() {
        console.log(this.state.moves);
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Reeeact
                    </a>
                </header>
            </div>
        );
    }
}
