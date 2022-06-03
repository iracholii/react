import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    online: true,
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
      online: !this.state.online,
    });
  };

  render() {
    const { online } = this.state;

    return online ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}

export default ConnectionStatus;
