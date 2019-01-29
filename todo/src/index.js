import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import TodosList from "./components/TodosList.js";
import TodosForm from "./components/TodosForm.js";
import moment from "moment";
import { createStore } from 'redux';
import todoReducer from './reducers/';
import { Provider } from 'react-redux';

const store = createStore(todoReducer)

class App extends React.Component {

  // handleChanges = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // addTodo = ev => {
  //   ev.preventDefault();
  //   if (this.state.titlevalue === "") {
  //     return;
  //   } else {
  //     this.setState(currentState => {
  //       return {
  //         todoList: currentState.todoList.concat({
  //           todotitle: this.state.titlevalue,
  //           id: Date.now(),
  //           date: new moment().format("MMMM Do YYYY, h:mm:ss a"),
  //           completed: false
  //         }),
  //         titlevalue: "",
          
  //       };
  //     });
  //   }
  // };

  // clearCompleted = ev => {
  //   ev.preventDefault();
  //   this.setState({
  //     todoList: this.state.todoList.filter(todo => todo.completed === false)
  //   });
  // };

  // toggleCompleted = index => {
  //   this.setState({
  //     todoList: this.state.todoList.map((todo, idx) => {
  //       if (index !== idx) {
  //         return todo;
  //       } else {
  //         return {
  //           ...todo,
  //           completed: !todo.completed
  //         };
  //       }
  //     })
  //   });
  // };

  // handleCheckbox() {
  //   this.setState(currentState => {
  //     return { 
  //       checkbox: !currentState.checkbox }
  //   })
  // }
  // componentDidMount() {
  //   if (localStorage.getItem("todoList")) {
  //     this.setState({
  //       todoList: JSON.parse(localStorage.getItem("todoList"))
  //     })
  //   }
  // }

  // componentDidUpdate() {
  //   localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
  // }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
