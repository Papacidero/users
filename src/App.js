import React, { Component } from 'react';
import generateUsers from './mock/generateUsers';
import { Header, Sidebar, User } from './components';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: {},
      search: '',
      layout: 'grid',
    };
    this.actions = {
      tabs: {
        getUsers: this.getUsers.bind(this),
        getFavorites: this.getFavorites.bind(this),
        getAdministrators: this.getAdministrators.bind(this),
        getRegularUser: this.getRegularUser.bind(this),
        getArchivedUsers: this.getArchivedUsers.bind(this),
      },
      user: {
        addToFavorite: this.addToFavorite.bind(this),
        changeRole: this.changeRole.bind(this),
        archiveUser: this.archiveUser.bind(this),
      },
      changeLayout: this.changeLayout.bind(this),
    };

    this.tabsMapping = [
      ['All Users', 'getUsers'],
      ['Favorites', 'getFavorites'],
      ['Administrators', 'getAdministrators'],
      ['Non-Admins', 'getRegularUser'],
      ['Archived', 'getArchivedUsers'],
    ];
  }

  async componentDidMount() {
    if (window.localStorage.getItem('users')) {
      const users = JSON.parse(window.localStorage.getItem('users'));
      this.setState({
        users,
        selectedTab: 'All Users',
      });
      this.createSearchMirror(users);
    } else {
      const users = await this.getUsers();
      window.localStorage.setItem('users', JSON.stringify(users));
      this.setState({
        users,
        selectedTab: 'All Users',
      });
      this.createSearchMirror(users);
    }
  }

  async getUsers() {
    this.chandleLoading('users', this.state.loading);
    return new Promise(resolve => {
      setTimeout(() => {
        this.chandleLoading('users', this.state.loading);
        this.setState({
          selectedTab: 'All Users',
          users: generateUsers,
        });
        resolve(generateUsers);
      }, 500);
    });
  }

  async getFavorites() {
    if (this.state.users) {
      const users = JSON.parse(window.localStorage.getItem('users')).filter(
        user => user.favorite
      );
      this.setState({
        users,
        selectedTab: 'Favorites',
      });
      this.createSearchMirror(users);
    }
  }

  async getAdministrators() {
    if (this.state.users) {
      const users = JSON.parse(window.localStorage.getItem('users')).filter(
        user => user.role === 'admin'
      );
      this.setState({
        users,
        selectedTab: 'Administrators',
      });
      this.createSearchMirror(users);
    }
  }

  async getRegularUser() {
    if (this.state.users) {
      const users = JSON.parse(window.localStorage.getItem('users')).filter(
        user => user.role === 'user'
      );
      this.setState({
        users,
        selectedTab: 'Non-Admins',
      });
      this.createSearchMirror(users);
    }
  }

  async getArchivedUsers() {
    if (this.state.users) {
      const users = JSON.parse(window.localStorage.getItem('users')).filter(
        user => user.archived
      );
      this.setState({
        users,
        selectedTab: 'Archived',
      });
      this.createSearchMirror(users);
    }
  }

  search(text) {
    if (this.state.users) {
      this.setState({
        search: text,
        users: JSON.parse(window.localStorage.getItem('searchMirror')).filter(
          user =>
            user.name.toLowerCase().includes(text.toLowerCase()) ||
            user.email.toLowerCase().includes(text.toLowerCase())
        ),
      });
    }
  }

  createSearchMirror(users) {
    window.localStorage.setItem('searchMirror', JSON.stringify(users));
  }

  addToFavorite(id) {
    const users = JSON.parse(window.localStorage.getItem('users')).map(user => {
      if (user.id === id) {
        user.favorite = !user.favorite;
        return user;
      }
      return user;
    });
    window.localStorage.setItem('users', JSON.stringify(users));
    this.refreshUsers();
  }

  changeRole(id) {
    const users = JSON.parse(window.localStorage.getItem('users')).map(user => {
      if (user.id === id) {
        user.role = user.role === 'admin' ? 'user' : 'admin';
        return user;
      }
      return user;
    });
    window.localStorage.setItem('users', JSON.stringify(users));
    this.refreshUsers();
  }

  archiveUser(id) {
    const users = JSON.parse(window.localStorage.getItem('users')).map(user => {
      if (user.id === id) {
        user.archived = !user.archived;
        return user;
      }
      return user;
    });
    window.localStorage.setItem('users', JSON.stringify(users));
    this.refreshUsers();
  }

  refreshUsers() {
    this.tabsMapping.forEach(tab => {
      if (tab[0] === this.state.selectedTab) {
        this.actions.tabs[tab[1]]();
      }
    });
  }

  chandleLoading(areaLoading, loadingObj) {
    loadingObj[areaLoading] = !loadingObj[areaLoading];
    this.setState({ loading: loadingObj });
  }

  changeLayout() {
    this.setState({
      layout: this.state.layout === 'grid' ? 'list' : 'grid',
    });
  }

  render() {
    const { layout, users, selectedTab, search, loading } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="page users">
        <Header />
        <Sidebar actions={this.actions.tabs} selectedTab={selectedTab} />
        <content>
          <header>
            <h2>{selectedTab || 'All Users '}</h2>
            <div className="options">
              {layout === 'grid' && (
                <span
                  className="clickable fa fa-bars"
                  role="none"
                  onClick={() => {
                    this.actions.changeLayout();
                  }}
                  onKeyDown={() => {
                    this.actions.changeLayout();
                  }}
                />
              )}
              {layout === 'list' && (
                <span
                  className="clickable fa fa-th"
                  role="none"
                  onClick={() => {
                    this.actions.changeLayout();
                  }}
                  onKeyDown={() => {
                    this.actions.changeLayout();
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
                    this.search(e.target.value);
                  }}
                />
                <i className="fa fa-search" />
              </div>
              {!loading.users && users ? (
                <div className={`users ${layout}`}>
                  {users.length > 0 ? (
                    users.map(user => (
                      <User
                        user={user}
                        key={user.id}
                        actions={this.actions.user}
                      />
                    ))
                  ) : (
                    <div className="empty">No Results Found</div>
                  )}
                </div>
              ) : (
                <div className="loading">
                  <p className="fas fa-circle-notch fa-spin" />
                </div>
              )}
            </div>
          </div>
        </content>
      </div>
    );
  }
}

export default App;
