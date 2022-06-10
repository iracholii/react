import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  toggleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.toggleDialog}>
          Show dialog
        </button>
        <Dialog title="Recommendation" isOpen={this.state.isOpen} onClose={this.toggleDialog}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
