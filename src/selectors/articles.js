export const getArticleById = ({ byId }, id) => byId[id];

export const getAllArticles = ({ byId, allIds }) => allIds.map(id => byId[id]);
