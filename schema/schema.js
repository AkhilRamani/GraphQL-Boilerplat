const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql')
const { books } = require('../dummyData');
const _ = require('lodash');

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=> ({
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        genre: { type: GraphQLString}
    })
});   

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Book: {
            type: BookType,
            args: { id: { type: GraphQLString}},
            resolve(parent, args){
                return _.find(books, { id: args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})