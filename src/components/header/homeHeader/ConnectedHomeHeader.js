import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import HomeHeader from './HomeHeader';

export default connect(null, {
  onAdd: () => push('/add'),
})(HomeHeader);
