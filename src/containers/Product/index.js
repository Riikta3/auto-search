import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import { resetState } from '../../actions/cars'



const mapStateToProps = (state) => ({
    car: state.cars.carClicked,
    index: state.cars.carIndexClicked
});

const mapDispatchToProps = (dispatch) => ({
    resetState: () => {
        dispatch(resetState())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
