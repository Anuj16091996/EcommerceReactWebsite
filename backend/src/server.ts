import express from 'express';
import { GraphQLList, GraphQLSchema } from 'graphql';

const { graphqlHTTP } = require('express-graphql');
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const app = express();
const port = 3001;

const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const customers = [
  {
    id: '1', name: 'John Doe', email: 'jdoe@gmail.com', age: 35,
  },
  {
    id: '2', name: 'Kelly James', email: 'kellyjames@gmail.com', age: 28,
  },
  {
    id: '3', name: 'Skinny Pete', email: 'skinnypete@gmail.com', age: 31,
  },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  field: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    field: {
      getallUsers: {
        type: new GraphQLList(UserType),
        args: { id: { type: GraphQLInt } },
        resolve(parent, args) {
          return customers;
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    field: {
      createUser: {
        type: UserType,
        args: {
          firstName: { type: GraphQLString },
        },
        resolve(parent, args) {
          return customers;
        },
      },
    },

  }),
});
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: customers,
  graphiql: true,
}));

app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));
