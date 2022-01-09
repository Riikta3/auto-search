import { connect } from 'react-redux';
import App from '../../components/App/App';
import { resetState } from '../../actions/cars'


const mapStateToProps = (state) => ({
    visibility: state.cars.visibilityProduct,
});

const mapDispatchToProps = (dispatch) => ({
    resetState: () => {
        dispatch(resetState())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
