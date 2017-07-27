import { connect } from 'react-redux';
import { getArticleById } from '../../selectors/articles';
import ArticleContainer from './ArticleContainer';
import { loadArticle } from '../../actions/articles';
import { hasAllFields } from '../../utils';

const articleKeys = ['author', 'content', 'published', 'tags', 'title'];

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;

  const article = getArticleById(state, id);

  const hasAllArticleKeys = hasAllFields(article, articleKeys);

  return {
    article: hasAllArticleKeys ? article : null,
    id,
  };
};

export default connect(mapStateToProps, {
  loadArticle,
})(ArticleContainer);

