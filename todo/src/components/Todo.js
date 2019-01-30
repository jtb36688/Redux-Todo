import React from "react";

function Todo(props) {
  const todocomplete = props.todos.completed;
  const minimizechecked = props.minimizedlist;
  const completedtext = todocomplete ? <p>All Done!</p> : <p>Not Yet!</p>;

  if (minimizechecked) {
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


export default Todo;
