import React from 'react';
import PropTypes from 'prop-types';

const getStyle = completed => {
  return {
    background: '#F4F4F4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: completed ? 'line-through' : 'none',
  };
};

const TodoItem = ({ markComplete, delTodo, todo }) => (
  <div style={getStyle(todo.completed)}>
    <p>
      <input
        type="checkbox"
        onChange={() => markComplete(todo.id)}
        checked={todo.completed ? 'checked' : ''}
      />{' '}
      {todo.title}
      <button onClick={() => delTodo(todo.id)} style={{ float: 'right' }}>
        <i className="fa fa-trash" aria-hidden="true" />
      </button>
    </p>
  </div>
);

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
