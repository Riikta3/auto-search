import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { changeInput, searchInput, displaySearch, resetSearch } from '../../actions/cars'

const mapStateToProps = (state) => ({
    inputValue: state.cars.inputValue
});

const mapDispatchToProps = (dispatch) => ({
    onInputChange: (event) => {
        dispatch(changeInput(event.target.value))
    },
    onSearchSubmit: (event) => {
        event.preventDefault();
        dispatch(resetSearch());
        dispatch(displaySearch());
        dispatch(searchInput());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
