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
  },
};

module.exports = { resolvers };
