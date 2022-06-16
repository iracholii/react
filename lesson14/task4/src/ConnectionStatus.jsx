import React, { useState, useEffect } from 'react';

// 1
// const ConnectionStatus = () => {
//   const [status, setStatus] = useState('online');

//   const statusChangeHandler = () => {
//     const changedStatus = status === 'online' ? 'offline' : 'online';
//     setStatus(changedStatus);
//   };

//   useEffect(() => {
//     window.addEventListener('online', statusChangeHandler);
//     window.addEventListener('offline', statusChangeHandler);

//     return () => {
//       window.removeEventListener('online', statusChangeHandler);
//       window.removeEventListener('offline', statusChangeHandler);
//     };
//   });

//   const classNames = status === 'online' ? 'status' : 'status status_offline';

//   return <div className={classNames}>{status}</div>;
// };

// 2
const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  const onlineHandler = () => {
    setStatus('online');
  };

  const offlineHandler = () => {
    setStatus('offline');
  };

  useEffect(() => {
    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  });

  const classNames = status === 'online' ? 'status' : 'status status_offline';

  return <div className={classNames}>{status}</div>;
};

export default ConnectionStatus;
