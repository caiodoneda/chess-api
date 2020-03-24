import React from 'react';
import classnames from 'classnames';
import 'css/Square.css';

export default function Square(props) {
    const classNames = classnames('Square', props.styling, {
        black: props.blackSquare,
        white: !props.blackSquare,
    });
    return <div onClick={props.onClick} className={classNames}></div>;
}
