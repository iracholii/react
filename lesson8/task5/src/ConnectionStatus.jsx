import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    online: true,
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
      online: true,
    });
  };

  offlineHandler = () => {
    this.setState({
      online: false,
    });
  };

  render() {
    return this.state.online ? (
      <div className="status">Online</div>
    ) : (
      <div className="status status_offline">Offline</div>
    );
  }
}

export default ConnectionStatus;
