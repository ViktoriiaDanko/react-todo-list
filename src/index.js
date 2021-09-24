import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const todoData = [
  { label: 'drink coffee', important: false },
  { label: 'make app', important: true },
  { label: 'have a lunch', important: false }
];

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));