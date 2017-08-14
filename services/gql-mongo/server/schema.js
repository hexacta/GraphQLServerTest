// schema.js
import { GraphQLObjectType, GraphQLSchema, GraphQLNonNull, GraphQLList, GraphQLString } from 'graphql';
import { AndroidType } from './schemaTypes';
import { mongo } from './mongoService';

let Q = require('q');

let schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: {
			android: {
				type: new GraphQLList(AndroidType),
				args: {
					name: {
						description: 'The name of the Andoid',
						type: GraphQLString // new GraphQLNonNull(GraphQLString)
					}
				},
				resolve: (root, { name }) => {
					return mongo().then(db => {
						let deferred = Q.defer();
						let collection = db.collection('android');
						let query = name === undefined ? {} : { name };

						collection.find(query).toArray((err, docs) => {
							if (err) {
								deferred.reject(err);
								return;
							}

							db.close();

							deferred.resolve(docs.length === 0 ? null : docs);
						});

						return deferred.promise;
					});
				}
			}
		}
	}),
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: {
			upsertAndroid: {
				type: AndroidType,
				args: {
					name: {
						description: 'The name of the Android',
						type: new GraphQLNonNull(GraphQLString)
					},
					gender: {
						description: 'The gender of the Android',
						type: new GraphQLNonNull(GraphQLString)
					},
					model: {
						description: 'The model of the Android',
						type: new GraphQLNonNull(GraphQLString)
					}
				},
				resolve: (obj, { name, gender, model }) => {
					let toCreate = {
						name,
						gender,
						model,
						created: new Date().valueOf()
					};

					return mongo().then(db => {
						let deferred = Q.defer();
						let collection = db.collection('android');

						// see if the user already exists
						collection.find({ name }).toArray((err, docs) => {
							if (err) {
								db.close();
								return deferred.reject(err);
							}

							if (docs.length) {
								db.close();
								return deferred.resolve(docs[0]);
							}

							// insert the user if they do not exist
							collection.insert(toCreate, (err, result) => {
								db.close();

								if (err) {
									deferred.reject(err);
									return;
								}

								deferred.resolve(toCreate);
							});
						});

						return deferred.promise;
					});
				}
			}
		}
	})
});

export default schema;
