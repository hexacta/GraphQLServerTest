import express from 'express';
import schema from './schema';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';

let app  = express();

// parse POST body as text
app.use(bodyParser.text({ type: 'application/graphql' }));

// execute GraphQL!
app.post('/graphql', (req, res) => {
  graphql(schema, req.body).then(result => res.send(result));
});

let port = 2323;
let server = app.listen(
  port,
  () => {
    console.log(`GraphQL running on port ${server.address().port}`);
  }
);