import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull
} from 'graphql';

const SomethingType = new GraphQLObjectType({
	name: 'Something',
	description: 'A Something',
	fields: () => ({
		name: {
			type: GraphQLString,
			resolve() {
				return 'Something information';
			}
		}
	})
});

export const PlayerType = new GraphQLObjectType({
	name: 'Player',
	description: 'A Player',
	fields: () => ({
		id: {
			name: 'id player',
			type: GraphQLInt,
			resolve(player) {
				return player.id;
			}
		},
		name: {
			type: GraphQLString,
			resolve(player) {
				return player.name;
			}
		},
		fullName: {
			type: GraphQLString,
			resolve(player) {
				return player.fullName;
			}
		},
		captain: {
			type: GraphQLBoolean,
			resolve(player) {
				return player.captain === 0;
			}
		},
		team: {
			type: TeamType,
			resolve(player) {
				return player.getTeam();
			}
		},
		something: {
			type: new GraphQLList(SomethingType),
			description: 'Something data',
			resolve(member) {
				return [
					{  name: 'Something data 1' },
					{  name: 'Something data 2' }
				];
			}
		}
	})
});

export const TeamType = new GraphQLObjectType({
	name: 'Team',
	description: 'A Team',
	fields: () => ({
		id: {
			type: GraphQLInt,
			resolve(team) {
				return team.id;
			}
		},
		name: {
			type: GraphQLString,
			resolve(team) {
				console.log(team);
				return team.name;
			}
		},
		points: {
			type: GraphQLInt,
			resolve(team) {
				return team.points;
			}
		},
		matchesWon: {
			type: GraphQLInt,
			resolver(team) {
				return team.matchesWon;
			}
		},
		matchesDrawn: {
			type: GraphQLInt,
			resolver(team) {
				return team.matchesDrawn;
			}
		},
		matchesLost: {
			type: GraphQLInt,
			resolve(team) {
				return team.matchesLost;
			}
		},
		goalsScored: {
			type: GraphQLInt,
			resolve(tema) {
				return tema.goalsScored;
			}
		},
		goalsReceived: {
			type: GraphQLInt,
			resolve(tema) {
				return team.goalsReceived;
			}
		},
		dif: {
			type: GraphQLInt,
			resolver(team) {
				return team.dif;
			}
		},
		something: {
			type: new GraphQLList(SomethingType),
			resolve(member) {
				return [
					{  name: 'Something data 1' },
					{  name: 'Something data 2' }
				];
			}
		},
		players: {
			type: new GraphQLList(PlayerType),
			resolve(member) {
				return member.getPlayers();
			}
		}
	})
});