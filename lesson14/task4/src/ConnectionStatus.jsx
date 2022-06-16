import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  const statusChangeHandler = () => {
    const changedStatus = status === 'online' ? 'offline' : 'online';
    setStatus(changedStatus);
  };

  useEffect(() => {
    window.addEventListener('online', statusChangeHandler);
    window.addEventListener('offline', statusChangeHandler);

    return () => {
      window.removeEventListener('online', statusChangeHandler);
      window.removeEventListener('offline', statusChangeHandler);
    };
  });

  const classNames = status === 'online' ? 'status' : 'status status_offline';

  return <div className={classNames}>{status}</div>;
};

export default ConnectionStatus;
