const { users } = require('../fakeData');

const resolvers = {
  Query: {
    getAllUsers: () => {
      return users;
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const newUser = args;
      /*
        OR
      const newUser = {
        name: args.name,
        age: args.age,
        married: args.married,
      };
      */
      users.push(newUser);
      return newUser;
    },

    deleteUser: (parent, args) => {
      const userIdx = users.findIndex(user => user.name === args.name);
      if (userIdx === -1) {
        throw new Error('User not found');
      }
      const deletedUser = users[userIdx];
      users.splice(userIdx, 1);
      return deletedUser;
    },

    updateMarriage: (parent, args) => {
      const userIdx = users.findIndex(user => user.name === args.name);
      if (userIdx === -1) {
        throw new Error('User not found');
      }
      const updatedUser = {
        ...users[userIdx],
        married: args.updatedMarriageStatus,
      };
      users[userIdx] = updatedUser;
      return updatedUser;
    },
  },
};

module.exports = { resolvers };
