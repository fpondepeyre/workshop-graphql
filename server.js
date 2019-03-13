//get all the libraries needed
const express = require("express");
const graphqlHTTP = require("express-graphql");

const schema = require('./schema');

//setting up the port number and express app
const port = 5000;
const app = express();

//Setup the nodejs GraphQL server
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port);
console.log(`GraphQL Server Running at localhost:${port}`);
