import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { pick } from 'lodash/object';
import UpdateArticleFormContainer from './UpdateArticleFormContainer';
import { loadArticle, updateArticle } from '../../../actions/articles';
import { getArticleById } from '../../../selectors/articles';
import { hasAllFields } from '../../../../utils';

const requiredFields = ['id', 'author', 'content', 'published', 'tags', 'title'];

const mapDispatchToProps = dispatch => ({
  onSubmit: article => dispatch(updateArticle(article)),
  loadArticle: id => dispatch(loadArticle(id, requiredFields)),
});

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;

  const article = getArticleById(state, id);

  return {
    article: hasAllFields(article, requiredFields) ? pick(article, requiredFields) : null,
    id,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateArticleFormContainer));
