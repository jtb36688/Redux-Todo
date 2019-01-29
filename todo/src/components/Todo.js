import React from "react";
import PropTypes from 'prop-types';

function Todo(props) {
  const todocomplete = props.todos.completed;
  const minimizechecked = props.minimize;
  const completedtext = todocomplete ? <p>All Done!</p> : <p>Not Yet!</p>;

  if (!minimizechecked) {
  return ( 
      <div
      className={todocomplete ? "MinComplete" : "MinIncomplete"}>
      <div><h3>{props.todos.todotitle}</h3></div>
      </div>
      )
  } else {
    return (
    <div
      className={todocomplete ? "SoleTodoCompleted" : "SoleTodo"}
      onClick={() => props.completed(props.index)}
    >
      <div className="Date">Added on: {props.todos.date}</div>
      <div className="TodoTitle">{props.todos.todotitle}</div>
      <div className = {todocomplete ? "CompleteBorder" : "IncompleteBorder"}
      >Completed:{completedtext}</div>
    </div>
  );
    }
}

Todo.propTypes = {
  completed: PropTypes.func,
  todos: PropTypes.shape({
      todotitle: PropTypes.string,
      id: PropTypes.number,
      date: PropTypes.string,
      completed: PropTypes.bool
  }),
  index: PropTypes.number,
  minimize: PropTypes.bool
}

export default Todo;
