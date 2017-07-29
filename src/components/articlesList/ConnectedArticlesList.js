import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllArticles } from '../../selectors/articles';
import ArticlesList from './ArticlesList';
import { deleteArticle } from '../../actions/articles';

const mapStateToProps = (state, { history }) => {
  const articles = getAllArticles(state);

  return {
    articles,
    onClick: id => history.push(`/${id}`),
    onUpdate: id => history.push(`/update/${id}`),
  };
};

export default withRouter(connect(mapStateToProps, {
  onDelete: deleteArticle,
})(ArticlesList));
