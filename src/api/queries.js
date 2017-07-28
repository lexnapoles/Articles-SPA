export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_BY_ID_QUERY = id => `{
  article(id: "${id}") {
    id
    author
    content
    published
    tags
    title
  }
}`;


export const DELETE_ARTICLE_QUERY = id => `
mutation {
  deleteArticle(article: {
    id: "${id}"
  })
}`;

export const ADD_ARTICLE_QUERY = ({ author, content, excerpt, tags, title }) => `
mutation {
  addArticle(article: {
    author: "${author}"
    content: "${content}"
    excerpt: "${excerpt}"
    tags: "${tags}"
    title: "${title}"
  }) {
    author
    content
    excerpt
    id
    published
    tags
    title
  }
}`;
