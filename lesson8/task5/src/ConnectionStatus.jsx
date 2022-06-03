import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onlineHandler);
    window.addEventListener('offline', this.offlineHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineHandler);
    window.removeEventListener('offline', this.offlineHandler);
  }

  onlineHandler = () => {
    this.setState({
      status: 'online',
    });
  };

  offlineHandler = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    return this.state.status === 'online' ? (
      <div className="status">{this.state.status}</div>
    ) : (
      <div className="status status_offline">{this.state.status}</div>
    );
  }
}

export default ConnectionStatus;
