import React from "react";
import PropTypes from 'prop-types';

function TodoForm(props) {
  return (
    <form style={{textAlign: 'center'}} onSubmit={props.add}>
      <input
        value={props.todotitle}
        type="text"
        name="titlevalue"
        placeholder="Todo Title"
        onChange={props.handleChanges}
      />
      {' '}<span>Collapse List</span>
      <input type='checkbox' onChange={props.onChange} ischecked={props.isChecked}></input>
      <button onClick={props.add}>Add Todo</button>
      <button onClick={props.clear}>Clear Completed</button>
    </form>
  );
}

TodoForm.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  handleChanges: PropTypes.func,
  todotitle: PropTypes.string,
  add: PropTypes.func,
  clear: PropTypes.func,
}

export default TodoForm;
