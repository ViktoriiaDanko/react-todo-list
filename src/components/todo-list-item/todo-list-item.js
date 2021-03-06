import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false,  
        important: false
    };

    // onLableClick = () => {
    //    this.setState(({done}) => {
    //        return {
    //            done: !done
    //        }
    //    })
    // };

    // onMarkImportant = () => {
    //     this.setState(( {important} ) => {
    //         return {
    //             important: !important
    //         }
    //     });
    // };

    // constructor() {
    //     super();

    //     this.onLableClick = () => {
    //         alert(`Done: ${this.props.label}`);
    //     };
    // };

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

        let className = 'todo-list-item';

        if (done) {
            className += ' done';
        }

        if(important) {
            className += ' important';
        }
    
        return (
            <span className={ className }>
                <span 
                    className="todo-list-item-label" 
                    onClick={ onToggleDone }
                    > { label } 
                </span>
    
            <button type="button"
                onClick={ onToggleImportant }
                className="btn btn-outline-success btn-sm float-right">
                <i className="bi bi-exclamation-lg" />
            </button>
    
            <button type="button"
                onClick={ onDeleted }
                className="btn btn-outline-danger btn-sm float-right">
                <i className="bi bi-x-circle-fill" />
            </button>
            </span>
        );
    };
};
