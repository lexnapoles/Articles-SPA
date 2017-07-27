import { connect } from 'react-redux';
import { getArticleById } from '../../selectors/articles';
import Article from './Article';

const articleKeys = ['author', 'content', 'published', 'tags', 'title'];

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;

  const article = getArticleById(state, id);
  const hasAllArticleKeys = articleKeys.every(key => article && article[key]);

  return {
    article: hasAllArticleKeys ? article : undefined,
  };
};

export default connect(mapStateToProps)(Article);
