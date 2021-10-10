import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'drink coffee', important: false,  id: 1},
      { label: 'make app', important: true,  id: 2 },
      { label: 'have a lunch', important: false,  id: 3},
      { label: 'have a lunch', important: false,  id: 4},
      { label: 'have a lunch', important: false,  id: 5}
    ]
  }

  deletedItem = (id) => {
    this.setState(( { todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    })
  };

  addedItem = (text) => {
    const newItem = {
      label: text,
      important: false,  
      id: this.maxId++
    }

    this.setState(( { todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      }
    })
  };

  onToggleImportant = (id) => {
    alert('important', id);
  };

  onToggleDone = (id) => {
    alert('done', id);
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} 
        onDeleted={ this.deletedItem }
        onToggleImportant={ this.onToggleImportant }
        onToggleDone = { this.onToggleDone }
       />
         <ItemAddForm onAdded= { this.addedItem }/>
      </div>
    );
  }
};
