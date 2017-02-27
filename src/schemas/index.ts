import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { handlingErrors } from '../core/graphql-error-handling';


/**
 * Queries
 */
import { FindAllBooksQuery } from '../schemas/book/findAllBooks.query';
import { FindBookByIdQuery } from '../schemas/book/findBookById.query';
import { FindAllAuthorsQuery } from '../schemas/author/findAllAuthors.query';
import { FindAuthorByIdQuery } from '../schemas/author/findAuthorById.query';


/**
 * RootQuery
 *
 * This will be published to the clients
 */
const RootQuery: GraphQLObjectType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        findAllAuthors: new FindAllAuthorsQuery(),
        findAuthorById: new FindAuthorByIdQuery(),
        findAllBooks: new FindAllBooksQuery(),
        findBookById: new FindBookByIdQuery()
    }
});


// /**
//  * Mutations
//  */
// import { createAuthorMutation } from './author/author.mutation';

// /**
//  * RootMutation
//  *
//  * This will be published to the clients
//  */
// const RootMutation: GraphQLObjectType = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         createAuthor: createAuthorMutation()
//     }
// });


/**
 * Export schema with all queries and mutations
 */
export const schema = new GraphQLSchema({
    query: RootQuery
    // mutation: RootMutation
});

// Handles internal erros and prints the stack to the console
handlingErrors(schema);
