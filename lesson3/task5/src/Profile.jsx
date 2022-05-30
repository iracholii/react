import React from 'react';
import moment from 'moment';

const Profile = (props) => {
  return (
    <div className="profile">
      <span className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</span>
      <span className="profile__birth">{`Was born ${moment(
        props.userData.birthDate
      ).format('DD MMM YY')} in ${props.userData.birthPlace}`}</span>
    </div>
  );
};

export default Profile;
