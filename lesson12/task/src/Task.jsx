import React from 'react';
import classNames from 'classnames';

const Task = ({ text, done }) => {
  //   const taskClasses = `list-item ${done && 'list-item_done'}`;
  const taskClasses = classNames('list-item', { 'list-item_done': done });

  return (
    <li className={taskClasses}>
      <input type="checkbox" className="list-item__checkbox" defaultChecked={done} />
      <span className="list-item__text"> {text}</span>
      <button className="list-item__delete-btn"></button>
    </li>
  );
};
export default Task;
