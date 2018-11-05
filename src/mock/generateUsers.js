// import moment from 'moment';
import names from './names';

const generateUsers = {
  randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  },
  randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  generator() {
    let users = [];
    for (let index = 0; index < names.length; index++) {
      users.push({
        firstName: names[this.randomNumber(0, names.length)],
        lastName: names[this.randomNumber(0, names.length)],
      });
    }
    users = users.map((user, index) => {
      user.name = `${user.firstName} ${user.lastName}`;
      user.email = `${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}@${user.lastName.toLowerCase()}.com`;
      user.id = index + 1;
      user.role = index % 15 === 0 ? 'admin' : 'user';
      user.archived = index % 23 === 0;
      user.favorite = index % 21 === 0;
      user.date = this.randomDate(new Date(2010, 1, 1), new Date());

      return user;
    });
    return users;
  },
};

const users = generateUsers.generator();

export default users;
