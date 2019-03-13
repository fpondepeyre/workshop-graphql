const Director = `
type Query {
  director(id: Int!): Director
}
type Director {
    id: ID!
    name: String
    age: Int
    movies: [Movie]
}
`;

module.exports = Director;