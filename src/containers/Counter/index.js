import { connect } from 'react-redux';
import Counter from '../../components/Counter/Counter';
import { sortCars, displaySort, displaySearch } from '../../actions/cars'


const mapStateToProps = (state) => ({
    cars: state.cars.list,
    value: state.cars.sortedValue
});

const mapDispatchToProps = (dispatch) => ({
    sortCars: (event) => {
        dispatch(sortCars(event.target.value))
        displaySort(event)
    },
    displaySort: (event) => {
        event.preventDefault();
        dispatch(displaySearch());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
