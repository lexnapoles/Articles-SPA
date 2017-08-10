import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/articles';
import AppContainer from './AppContainer';

export default connect(null, { fetchArticles })(AppContainer);
