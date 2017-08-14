import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLBoolean,
	GraphQLNonNull
} from 'graphql';

const ListData = new GraphQLObjectType({
	name: 'data',
	fields: () => ({
		message: {
			type: GraphQLString,
			description: 'message'
		}	
	})
});

const SomethingDataType = new GraphQLObjectType({
	name: 'SomethingData',
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

const SomethingDataWithoutResolverType = new GraphQLObjectType({
	name: 'SomethingDataWithoutResolver',
	description: 'A Something Without Resolver',
	fields: () => ({
		name: {
			type: GraphQLString
		}
	})
});

export let TODOList = [];

export const TodoType = new GraphQLObjectType({
	name: 'todo',
	fields: () => ({
		id: {
			type: GraphQLInt,
			description: 'Todo id'
		},
		title: {
			type: GraphQLString,
			description: 'Task title'
		},
		description: {
			type: GraphQLString,
			description: 'Task description'
		},
		done: {
			type: GraphQLBoolean,
			description: 'Flag to mark if the task is done'
		},
		data: {
			type: new GraphQLList(ListData),
			description: 'Random data',
			resolve(member) {
				return [
					{  message: 'message 1' },
					{  message: 'message 2' }
				];
			}
		},
		something: {
			type: new GraphQLList(SomethingDataType),
			description: 'Something data',
			resolve(member) {
				return [
					{  name: 'Something data 1' },
					{  name: 'Something data 2' }
				];
			}
		},
		somethingWithoutResolver: {
			type: new GraphQLList(SomethingDataWithoutResolverType),
			description: 'Something data',
			resolve(member) {
				return [
					{  name: 'Something data without resolver 1' },
					{  name: 'Something data without resolver 2' }
				];
			}
		}
	})
});

export const MutationAdd = {
	type: new GraphQLList(TodoType),
	description: 'Add a Todo',
	args: {
		title: {
			name: 'Todo title',
			type: new GraphQLNonNull(GraphQLString)
		}
	},
	resolve: (root, args) => {

		function getId(min, max) {
			let base = (new Date().getTime()) / 10000000000000;
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(base * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
		}

		TODOList.push({
			id: getId(1, 2147483647),
			title: args.title,
			description: args.title + ' description',
			done: false
		});

		return TODOList;
	}
};

export const MutationToggle = {
	type: new GraphQLList(TodoType),
	description: 'Toggle the todo',
	args: {
		id: {
			name: 'Todo Id',
			type: new GraphQLNonNull(GraphQLInt)
		}
	},
	resolve: (root, args) => {
		TODOList.filter((todo) => todo.id === args.id).forEach((todo) => (todo.done = !todo.done));
		return TODOList;
	}
};

export const MutationDestroy = {
	type: new GraphQLList(TodoType),
	description: 'Destroy the todo',
	args: {
		id: {
			name: 'Todo Id',
			type: new GraphQLNonNull(GraphQLInt)
		}
	},
	resolve: (root, args) => {
		return (TODOList = TODOList.filter((todo) => todo.id !== args.id));
	}
};

export const MutationToggleAll = {
	type: new GraphQLList(TodoType),
	description: 'Toggle all todos',
	args: {
		checked: {
			name: 'Todo Id',
			type: new GraphQLNonNull(GraphQLBoolean)
		}
	},
	resolve: (root, args) => {
		TODOList.forEach((todo) => (todo.done = args.checked));
		return TODOList;
	}
};

export const MutationClearCompleted = {
	type: new GraphQLList(TodoType),
	description: 'Clear completed',
	resolve: () => {
		return (TODOList = TODOList.filter((todo) => !todo.done));
	}
};

export const MutationSave = {
	type: new GraphQLList(TodoType),
	description: 'Edit a todo',
	args: {
		id: {
			name: 'Todo Id',
			type: new GraphQLNonNull(GraphQLInt)
		},
		title: {
			name: 'Todo title',
			type: new GraphQLNonNull(GraphQLString)
		}
	},
	resolve: (root, args) => {
		TODOList.filter((todo) => todo.id === args.id).forEach((todo) => (todo.title = args.title));
		
    return TODOList;
	}
};