import React from 'react';
import classnames from 'classnames';
import 'css/Square.css';

export default function Square(props) {
    const classNames = classnames('Square', {
        black: props.blackSquare,
        white: !props.blackSquare,
        selected: props.selected,
    });
    return <div onClick={props.onClick} className={classNames}></div>;
}
