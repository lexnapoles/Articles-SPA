import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddArticleFormContainer from './AddArticleFormContainer';
import { addArticle } from '../../../actions/articles';

export default withRouter(connect(null, {
  onSubmit: addArticle,
})(AddArticleFormContainer));
