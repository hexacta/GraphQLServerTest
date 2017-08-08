import express from 'express';
import graphqlHTTP from 'express-graphql';
import Schema from './schema';

let app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema: Schema,
		pretty: true,
		graphiql: true
	})
);

let port = 2300;

let server = app.listen(port, () => {
	console.log(`We are live on ${port}`);
});
