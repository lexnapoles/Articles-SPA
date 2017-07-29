import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';

const mapStateToProps = (state, { history }) => ({
  onAdd: () => history.push('/add'),
});

export default withRouter(connect(mapStateToProps)(Header));
