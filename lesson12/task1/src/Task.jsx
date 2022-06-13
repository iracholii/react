import React from 'react';
import classNames from 'classnames';

const Task = ({ text, done, onChange, id, onDelete }) => {
  //   const taskClasses = `list-item ${done && 'list-item_done'}`;
  const taskClasses = classNames('list-item', { 'list-item_done': done });

  return (
    <li className={taskClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text"> {text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};

export default Task;
