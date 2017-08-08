import { GraphQLObjectType, GraphQLSchema, GraphQLList } from 'graphql';
import {
	TODOList,
	TodoType,
	MutationAdd,
	MutationToggle,
	MutationDestroy,
	MutationToggleAll,
	MutationClearCompleted,
	MutationSave
} from './schemaTodoType';

let queryType = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		todos: {
			type: new GraphQLList(TodoType),
			resolve: () => TODOList
		}
	})
});

let mutationType = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		add: MutationAdd,
		toggle: MutationToggle,
		toggleAll: MutationToggleAll,
		destroy: MutationDestroy,
		clearCompleted: MutationClearCompleted,
		save: MutationSave
	}
});

const SchemaType = new GraphQLSchema({
	query: queryType,
	mutation: mutationType
});

export default SchemaType;
