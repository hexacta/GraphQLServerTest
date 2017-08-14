import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from 'graphql';

export const AndroidType = new GraphQLObjectType({
  name: 'Android',
  description: 'A Android',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of the Android.',
    },
    gender: {
      type: GraphQLString,
      description: 'The gender of the Android.',
    },
    model: {
      type: GraphQLString,
      description: 'The gender of the Android.',
    }
  })
});