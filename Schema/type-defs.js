const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
    married: Boolean!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
  }

  # Mutations
  type Mutation {
    createUser(name: String!, age: Int!, married: Boolean!): User!
    deleteUser(name: String!): User!
    updateMarriage(name: String!, updatedMarriageStatus: Boolean!): User!
  }
`;

module.exports = { typeDefs };
