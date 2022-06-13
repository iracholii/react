import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onCreate = text => {
    // 1. create task object
    // 2. post object to server
    // 3. fetch list from server

    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = id => {
    // 1. find task in state by
    // 2. create updated task
    // 3. update task on server
    // 4. fetch updated tasks list

    const taskToUpdate = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      ...taskToUpdate,
      done: !taskToUpdate.done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    // 1. find task by id
    // 2. delete task on server
    // 3. fetch updated tasks list

    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const { tasks } = this.state;
    const sortedList = tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
