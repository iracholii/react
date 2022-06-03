import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.statusChangeHandler);
    window.addEventListener('offline', this.statusChangeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.statusChangeHandler);
    window.removeEventListener('offline', this.statusChangeHandler);
  }

  statusChangeHandler = () => {
    this.setState({
      status: this.state.status === 'online' ? 'offline' : 'online',
    });
  };

  render() {
    const { status } = this.state;

    return status === 'online' ? (
      <div className="status">{status}</div>
    ) : (
      <div className="status status_offline">{status}</div>
    );
  }
}

export default ConnectionStatus;
