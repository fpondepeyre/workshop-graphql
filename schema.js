const { makeExecutableSchema } = require ('graphql-tools');
const { mergeTypes, mergeResolvers } = require('merge-graphql-schemas');
const Director = require ('./director/schema');
const Movie = require ('./movie/schema');
const DirectorResolver  = require('./director/resolver');
const MovieResolver  = require('./movie/resolver');

const Types = [
    Director,
    Movie
];

const Resolvers = [
    DirectorResolver,
    MovieResolver
];

module.exports = makeExecutableSchema({
    typeDefs: mergeTypes(Types),
    resolvers: mergeResolvers(Resolvers),
    logger: {log: e => console.log(e)},
});