var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        type Query {
            hello: String
        }     return 'Hello world!';
    },
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
console.log('CORS-enabled web server listening on port 80')