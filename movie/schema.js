const Movie = `
type Query {
  movie (id: Int!): Movie
}
type Movie {
    id: ID!
    name: String
    year: Int
    directorId: ID!
}
`;

module.exports = Movie;