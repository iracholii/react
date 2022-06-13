import React from 'react';

class CreateTaskInput extends React.Component {
  state = {
    //
  };

  render() {
    return (
      <div className="create-task">
        <input className="create-task__input" type="text" value="" />
        <button className="btn create-task__btn">Create</button>
      </div>
    );
  }
}

export default CreateTaskInput;

// 1. take text from input
// 2. create task with this text
// 3. add created task to the list
