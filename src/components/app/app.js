import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const todoData = [
  { label: 'drink coffee', important: false,  id: 1},
  { label: 'make app', important: true,  id: 2 },
  { label: 'have a lunch', important: false,  id: 3},
  { label: 'have a lunch', important: false,  id: 4},
  { label: 'have a lunch', important: false,  id: 5}
];

const App = () => {
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;