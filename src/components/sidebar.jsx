import React from 'react';

const Sidebar = props => (
  <side-bar>
    <header>
      <h2>Users</h2>
    </header>
    <ul>
      <li
        className={props.selectedTab === 'All Users' ? 'active' : ''}
        onClick={() => {
          props.actions.getUsers();
        }}
      >
        <span className="fa fa-user-circle" /> All Users
      </li>
      <li
        className={props.selectedTab === 'Favorites' ? 'active' : ''}
        onClick={() => {
          props.actions.getFavorites();
        }}
      >
        <span className="fa fa-star" /> Favorites
      </li>
      <li
        className={props.selectedTab === 'Administrators' ? 'active' : ''}
        onClick={() => {
          props.actions.getAdministrators();
        }}
      >
        <span className="fa fa-shield-alt" /> Administrators
      </li>
      <li
        className={props.selectedTab === 'Non-Admins' ? 'active' : ''}
        onClick={() => {
          props.actions.getRegularUser();
        }}
      >
        <span className="fa fa-user-friends" /> Non-Admins
      </li>
      <li
        className={props.selectedTab === 'Archived' ? 'active' : ''}
        onClick={() => {
          props.actions.getArchivedUsers();
        }}
      >
        <span className="fa fa-archive" /> Archived
      </li>
    </ul>
  </side-bar>
);

export default Sidebar;
