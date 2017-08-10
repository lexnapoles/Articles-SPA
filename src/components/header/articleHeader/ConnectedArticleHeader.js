import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ArticleHeader from './ArticleHeader';

export default connect(null, {
  onHome: () => push('/'),
})(ArticleHeader);
