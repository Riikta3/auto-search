import { connect } from 'react-redux';
import Results from '../../components/Results/Results';
import { displayCarFound, getCarKey } from '../../actions/cars'


const mapStateToProps = (state) => ({
    cars: state.cars.list,
    car: state.cars.carClicked
});

const mapDispatchToProps = (dispatch) => ({
    getCarKey: (event) => {
        dispatch(getCarKey(Number(event.currentTarget.getAttribute('data-index'))))
        dispatch(displayCarFound())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
