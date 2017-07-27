import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLSchema,
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    article: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'The id of the article',
        },
      },
      resolve(_, { id }) {
        return db.Article.findById(id);
      },
    },
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
  }),
});

const deleteArticleInputType = new GraphQLInputObjectType({
  name: 'DeleteArticleInput',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The id of the article',
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is a root mutation',
  fields: () => ({
    deleteArticle: {
      type: GraphQLString,
      args: {
        article: {
          type: new GraphQLNonNull(deleteArticleInputType),
        },
      },
      resolve(_, { article }) {
        return db.Article.findByIdAndRemove(article.id)
          .then(({ id }) => id);
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
