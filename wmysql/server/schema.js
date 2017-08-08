import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull
} from 'graphql';
import { PlayerType, TeamType } from './schemaTorneodefutbolTypes';
import Db from './db';

let queryType = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		player: {
			type: new GraphQLList(PlayerType),
			args: {
				id: {
					type: GraphQLInt
				},
				name: {
					type: GraphQLString
				},
				captain: {
					type: GraphQLBoolean
				}
			},
			resolve(root, args) {
				let playerData = Db.models.players.findAll({ where: args });

				playerData.then(function(s) {
					console.log(s);
				});

				return playerData;
			}
		},
		team: {
			type: new GraphQLList(TeamType),
			args: {
				id: {
					type: GraphQLInt
				},
				name: {
					type: GraphQLString
				}
			},
			resolve(root, args) {
				let teamData = Db.models.teams.findAll({ where: args });

				teamData.then(function(s) {
					console.log(s);
				});

				return teamData;
			}
		}
	})
});

const SchemaType = new GraphQLSchema({
	query: queryType
});

export default SchemaType;
