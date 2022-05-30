import React from 'react';
import Avatar from './Avatar.jsx';
import './user-info.scss';

const UserInfo = (props) => {
  //   console.log(props);

  return (
    <div className="user-info">
      {/* <img
          className="avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        /> */}

      <Avatar name={props.user.name} avatarUrl={props.user.avatarUrl} />

      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;
