export const getArticleById = ({ articles: { byId } }, id) => byId[id];

export const getAllArticles = ({ articles: { byId, allIds } }) => allIds.map(id => byId[id]);
