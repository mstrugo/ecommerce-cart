import { connect } from 'react-redux';
import App from '../../app';
import { loadCategories, loadProducts } from '~redux/actions/load';


const mapDispatchToProps = {
  loadCategories,
  loadProducts
};


export default connect(null, mapDispatchToProps)(App);
