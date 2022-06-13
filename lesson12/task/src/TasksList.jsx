import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

class TasksList extends React.Component {
  state = {
    tasks: [
      {
        text: 'Learn React',
        done: false,
        id: 1,
      },
      {
        text: 'Lear HTML / CSS',
        done: true,
        id: 2,
      },
      {
        text: 'Learn JavaScript',
        done: true,
        id: 3,
      },
      {
        text: 'Learn Dev Tools',
        done: true,
        id: 4,
      },
    ],
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="todo-list">
        <CreateTaskInput />
        <ul className="list">
          {tasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
