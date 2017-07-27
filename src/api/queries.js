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
