export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_BY_ID_QUERY = `
  query ($id: String!) {
    article(id: $id) {
    id
    author
    content
    published
    tags
    title
  }
}`;

export const DELETE_ARTICLE_QUERY = `
mutation ($article: DeleteArticleInput!) {
  deleteArticle(article: $article)
}`;

export const ADD_ARTICLE_QUERY = `
mutation ($article: AddArticleInput!) {
  addArticle(article: $article) {
    author
    content
    excerpt
    id
    published
    tags
    title
  }
}`;

export const UPDATE_ARTICLE_QUERY = `
mutation ($article: UpdateArticleInput!) {
  updateArticle(article: $article) {
    id
    author
    content
    published
    tags
    title
  }
}`;
