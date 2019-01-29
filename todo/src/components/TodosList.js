import React from "react";
import Todo from "./Todo.js";
import { connect } from "react-redux";
import { toggleCompleted } from "../actions";

function TodosList(props) {
  return (
    <div>
      {props.todoArrayOnProps.map((todo, index) => (
        <Todo
          todoArrayOnProps={props.todoArrayOnProps}
          index={index}
          todos={todo}
          key={todo.id}
          completed={props.toggleCompleted}
          minimizedlist={props.minimizedlist}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todoArrayOnProps: state.todoList,
    minimizedlist: state.minimizedlist
  };
};

export default connect(
  mapStateToProps,
  { toggleCompleted }
)(TodosList);
