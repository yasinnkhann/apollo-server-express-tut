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
      const userIndex = users.findIndex(user => user.name === args.name);
      if (userIndex === -1) {
        throw new Error('User not found');
      }
      const deletedUser = users[userIndex];
      users.splice(userIndex, 1);
      return deletedUser;
    },
    updateUser: (parent, args) => {
      const userIndex = users.findIndex(user => user.name === args.name);
      if (userIndex === -1) {
        throw new Error('User not found');
      }
      const updatedUser = args;
      users[userIndex] = updatedUser;
      return updatedUser;
    },
  },
};

module.exports = { resolvers };
