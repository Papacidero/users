import React from 'react';
import moment from 'moment';

const User = props => (
  <div className="user">
    <span className="fa fa-user-circle" />
    <div className="user-info">
      <h3>{props.user.name}</h3>
      <a href={`mailto:${props.user.email}`}>{props.user.email}</a>
    </div>
    <span>{moment(props.user.date).format('MMM D, YYYY')}</span>
    <span>{moment(props.user.date).fromNow()}</span>
    <div>
      <div className="fa fa-ellipsis-v dropdown clickable">
        <ul>
          <li
            onClick={() => {
              props.actions.addToFavorite(props.user.id);
            }}
          >
            <span className="fa fa-star" />{' '}
            {!props.user.favorite
              ? 'Add to Favorites'
              : 'Remove from Favorites'}
          </li>
          <li
            onClick={() => {
              props.actions.changeRole(props.user.id);
            }}
          >
            <span
              className={`fa ${
                props.user.role === 'admin' ? 'fa-user-circle' : 'fa-shield-alt'
              }`}
            />{' '}
            {props.user.role === 'admin'
              ? 'Change to Regular User'
              : 'Change Role to Admin'}
          </li>
          <li
            onClick={() => {
              props.actions.archiveUser(props.user.id);
            }}
          >
            <span className="fa fa-archive" />{' '}
            {!props.user.archived ? 'Archive' : 'Remove from Archive'}
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default User;
