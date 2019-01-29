import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { handleInput, toggleMinimized, addTodo, clearCompleted } from "../actions"

function TodosForm(props) {
  
  const handleSubmit = (e, todotitle) => {
    e.preventDefault();
    props.addTodo(todotitle)
  }
  const handleChanges = (e) => {
    props.handleInput(e.target.name , e.target.value)
  }

  return (
    <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e, props.todotitle)}>
      <input
        value={props.todotitle}
        type="text"
        name="titlevalue"
        placeholder="Todo Title"
        onChange={(e) => handleChanges(e)}
      />
      {' '}<span>Collapse List</span>
      <input type='checkbox' onChange={props.toggleMinimized} ischecked={props.minimizedlist}></input>
      <button onClick={(e) => handleSubmit(e, props.todotitle)}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}

const mapStateToProps = state => {
    return {
        todoArrayOnProps: state.todoList,
        todotitle: state.titlevalue,
        minimizedlist: state.minimizedlist
    }
}

// TodoForm.propTypes = {
//   isChecked: PropTypes.bool,
//   onChange: PropTypes.func,
//   handleChanges: PropTypes.func,
//   todotitle: PropTypes.string,
//   add: PropTypes.func,
//   clear: PropTypes.func,
// }

export default connect(
    mapStateToProps,
    { handleInput, toggleMinimized, addTodo, clearCompleted }
  )(TodosForm);

