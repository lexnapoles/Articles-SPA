import { connect } from 'react-redux';
import { getAllArticles } from '../../selectors/articles';
import ArticlesList from './ArticlesList';

const mapStateToProps = state => {
  const articles = getAllArticles(state);

  return {
    articles,
  };
};

export default connect(mapStateToProps)(ArticlesList);
