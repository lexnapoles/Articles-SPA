import { connect } from 'react-redux';
import AddArticleFormContainer from './AddArticleFormContainer';
import { addArticle } from '../../actions/articles';

export default connect(null,
  {
    onSubmit: addArticle,
  },
)(AddArticleFormContainer);
