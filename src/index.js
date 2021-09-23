import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  return (
  <ul>
    <li>Learn React</li>
    <li>Build App</li>
  </ul>
  )
};

const AppHeader = () => {
  return <h1>My Todo List</h1>
};


const SearchPanel = () => {
  const SearchText = 'Type here to search';
  return  <input placeholder={SearchText}/>
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));