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

export const DELETE_ARTICLE_QUERY = id =>
  `mutation delete {
    deleteArticle(article: {
      id: ${id}
    })
  }
`;
