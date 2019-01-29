import React from "react";
import Todo from "./Todo.js";
import PropTypes from "prop-types";

function TodoList(props) {
  return (
    <div>
      {props.wholeTodoList.map((todo, index) => (
        <Todo
          index={index}
          todos={todo}
          key={todo.id}
          completed={props.completed}
          minimize={props.minimize}
        />
      ))}
    </div>
  );
}
// prop checking
TodoList.propTypes = {
  wholeTodoList: PropTypes.arrayOf(
    PropTypes.shape({
      todotitle: PropTypes.string,
      id: PropTypes.number,
      date: PropTypes.string,
      completed: PropTypes.bool
    })
  ),
  completed: PropTypes.func,
  minimize: PropTypes.bool
};

// default props
TodoList.defaultProps = {
  wholeTodoList: []
}

export default TodoList;
