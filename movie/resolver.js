const _ = require("lodash");

const { movies } = require("../data.js");

module.exports = {
    Query: {
        movie: (source, args) => _.find(movies, { id: args.id })
    },
};