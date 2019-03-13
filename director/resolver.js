const _ = require("lodash");

const { movies: moviesData, directors } = require("../data.js");

module.exports = {
    Query: {
        director: (source, args) => _.find(directors, { id: args.id })
    },
    Director: {
        movies: (source, args) => _.filter(moviesData, { directorId: source.id })
    }
};