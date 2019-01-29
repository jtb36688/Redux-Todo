import React from "react";
import Todo from "./Todo.js";
import PropTypes from "prop-types";
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

// prop checking
// TodoList.propTypes = {
//   wholeTodoList: PropTypes.arrayOf(
//     PropTypes.shape({
//       todotitle: PropTypes.string,
//       id: PropTypes.number,
//       date: PropTypes.string,
//       completed: PropTypes.bool
//     })
//   ),
//   completed: PropTypes.func,
//   minimize: PropTypes.bool
// };

// default props
// TodoList.defaultProps = {
//   wholeTodoList: []
// }

export default connect(
  mapStateToProps,
  { toggleCompleted }
)(TodosList);
