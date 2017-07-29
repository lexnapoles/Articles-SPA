import { connect } from 'react-redux';
import { getArticleById } from '../../selectors/articles';
import ArticleContainer from './ArticleContainer';
import { loadArticle } from '../../actions/articles';
import { hasAllFields } from '../../../utils';

const articleKeys = ['id', 'author', 'content', 'published', 'tags', 'title'];

const mapStateToProps = (state, { match, history }) => {
  const { id } = match.params;

  const article = getArticleById(state, id);

  const hasAllArticleKeys = hasAllFields(article, articleKeys);

  return {
    article: hasAllArticleKeys ? article : undefined,
    id,
    onUpdate: () => history.push(`/update/${id}`),
  };
};

export default connect(mapStateToProps, {
  loadArticle,
})(ArticleContainer);

