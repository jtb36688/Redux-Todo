import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { handleChanges, toggleMinimized, addTodo, clearCompleted } from "../actions"

function TodosForm(props) {
  return (
    <form style={{textAlign: 'center'}} onSubmit={props.addTodo}>
      <input
        value={props.todotitle}
        type="text"
        name="titlevalue"
        placeholder="Todo Title"
        onChange={props.handleChanges}
      />
      {' '}<span>Collapse List</span>
      <input type='checkbox' onChange={props.toggleMinimized} ischecked={props.minimizedlist}></input>
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}

const mapStateToProps = state => {
    return {
        todotitle: state.todotitle,
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
    { handleChanges, toggleMinimized, addTodo, clearCompleted }
  )(TodosForm);

