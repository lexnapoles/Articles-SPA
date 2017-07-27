import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllArticles } from '../../selectors/articles';
import ArticlesList from './ArticlesList';

const mapStateToProps = (state, { history }) => {
  const articles = getAllArticles(state);

  return {
    articles,
    onClick: id => history.push(`/${id}`),
  };
};

export default withRouter(connect(mapStateToProps)(ArticlesList));
