import React from 'react';

// 1
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

// 2
// class ConnectionStatus extends React.Component {
//   state = {
//     status: 'online',
//   };

//   componentDidMount() {
//     window.addEventListener('online', this.statusChangeHandler);
//     window.addEventListener('offline', this.statusChangeHandler);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('online', this.statusChangeHandler);
//     window.removeEventListener('offline', this.statusChangeHandler);
//   }

//   statusChangeHandler = () => {
//     this.setState({
//       status: this.state.status === 'online' ? 'offline' : 'online',
//     });
//   };

//   render() {
//     const { status } = this.state;

//     return status === 'online' ? (
//       <div className="status">{status}</div>
//     ) : (
//       <div className="status status_offline">{status}</div>
//     );
//   }
// }

// 3
// class ConnectionStatus extends React.Component {
//   state = {
//     online: true,
//   };

//   componentDidMount() {
//     window.addEventListener('online', this.statusChangeHandler);
//     window.addEventListener('offline', this.statusChangeHandler);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('online', this.statusChangeHandler);
//     window.removeEventListener('offline', this.statusChangeHandler);
//   }

//   statusChangeHandler = () => {
//     this.setState({
//       online: !this.state.online,
//     });
//   };

//   render() {
//     const { online } = this.state;

//     return online ? (
//       <div className="status">online</div>
//     ) : (
//       <div className="status status_offline">offline</div>
//     );
//   }
// }

export default ConnectionStatus;
