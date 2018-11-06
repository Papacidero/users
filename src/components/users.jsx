import React from 'react';
import User from './user';

const Users = props => (
  <div className={`users ${props.layout}`}>
    {props.users.length > 0 ? (
      props.users.map(user => (
        <User user={user} key={user.id} actions={props.actions} />
      ))
    ) : (
      <div className="empty">No Results Found</div>
    )}
  </div>
);

export default Users;
