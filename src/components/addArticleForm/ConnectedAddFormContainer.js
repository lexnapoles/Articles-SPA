import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddArticleFormContainer from './AddArticleFormContainer';
import { addArticle } from '../../actions/articles';

const mapDispatchToProps = (dispatch, { history }) => {
  const onSubmit = article => {
    dispatch(addArticle(article));

    history.push('/');
  };

  return {
    onSubmit,
  };
};


export default withRouter(connect(null, mapDispatchToProps)(AddArticleFormContainer));
