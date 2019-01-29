import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import TodosList from "./components/TodosList.js";
import TodosForm from "./components/TodosForm.js";
import { createStore } from 'redux';
import todoReducer from './reducers/';
import { Provider } from 'react-redux';

const store = createStore(todoReducer)

class App extends React.Component {

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> Todo List</h1>
        <TodosList/>
        <TodosForm/>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
