import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UpdateArticleFormContainer from './UpdateArticleFormContainer';
import { updateArticle } from '../../actions/articles';
import { getArticleById } from '../../selectors/articles';
import { hasAllFields } from '../../../utils';

const articleKeys = ['author', 'content', 'published', 'tags', 'title'];

const mapDispatchToProps = (dispatch, { history }) => {
  const onSubmit = article => {
    dispatch(updateArticle(article));

    history.push(`/${article.id}`);
  };

  return {
    onSubmit,
  };
};

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;

  const article = getArticleById(state, id);

  const hasAllArticleKeys = hasAllFields(article, articleKeys);

  return {
    article: hasAllArticleKeys ? article : null,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateArticleFormContainer));
