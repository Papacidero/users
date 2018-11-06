import React from 'react';
import Users from './users';

const Content = props => {
  const { layout, users, selectedTab, search, loading } = props.data;
  const { actions } = props;
  return (
    <content>
      <header>
        <h2>{selectedTab || 'All Users '}</h2>
        <div className="options">
          {layout === 'grid' && (
            <span
              className="clickable fa fa-bars"
              role="none"
              onClick={() => {
                actions.changeLayout();
              }}
              onKeyDown={() => {
                actions.changeLayout();
              }}
            />
          )}
          {layout === 'list' && (
            <span
              className="clickable fa fa-th"
              role="none"
              onClick={() => {
                actions.changeLayout();
              }}
              onKeyDown={() => {
                actions.changeLayout();
              }}
            />
          )}

          <span className="fa fa-cog" />
          <span className="fa fa-ellipsis-v" />
        </div>
      </header>
      <div className="container">
        <div className="container-inner">
          <div className="container-input">
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={e => {
                actions.search(e.target.value);
              }}
            />
            <i className="fa fa-search" />
          </div>
          {!loading.users && users ? (
            <Users users={users} layout={layout} actions={actions.user} />
          ) : (
            <div className="loading">
              <p className="fas fa-circle-notch fa-spin" />
            </div>
          )}
        </div>
      </div>
    </content>
  );
};

export default Content;
