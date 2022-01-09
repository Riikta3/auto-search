import {
    CHANGE_INPUT,
    SEARCH_INPUT,
    DISPLAY_SEARCH,
    SORT_CARS,
    DISPLAY_SORT,
    GET_CAR_INDEX,
    DISPLAY_CAR_FOUND,
    RESET_STATE,
    RESET_SEARCH
}
    from '../actions/cars';
import cars from '../assets/data.json'

export const initialState = {
    list: cars,
    inputValue: '',
    sortedValue: 'Default',
    carIndexClicked: '',
    visibilityProduct: false,
    carClicked: ''
};

const reducer = (state = initialState, action = {}) => {
    const listArray = state.list;
    const searchInput = state.inputValue;
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                inputValue: action.newValue,
            };
        case SEARCH_INPUT:
            return {
                ...state,
                inputValue: '',
            };
        case DISPLAY_SEARCH:
            const newList = listArray.filter(car => {
                return (
                    car.Nom.toLowerCase().includes(searchInput.toLowerCase()) ||
                    car.Classe.toLowerCase().includes(searchInput.toLowerCase()) ||
                    car.Marque.toLowerCase().includes(searchInput.toLowerCase()) ||
                    car.Energie.toLowerCase().includes(searchInput.toLowerCase())
                )
            })
            return {
                ...state,
                list: newList
            };
        case SORT_CARS:
            const valueToSort = action.sortValue;
            function sortArray() {
                return listArray.sort((a, b) => {
                    return (a[valueToSort] > b[valueToSort]) ? 1 : -1
                })
            }
            if (valueToSort === "Default") break
            else sortArray()
            return {
                ...state,
                list: listArray,
            };
        case DISPLAY_SORT:
            return {
                ...state,
                list: listArray
            };
        case GET_CAR_INDEX:
            return {
                ...state,
                carIndexClicked: action.index,
                visibilityProduct: !state.visibility,
            }
        case DISPLAY_CAR_FOUND:
            return {
                ...state,
                carClicked: state.list[state.carIndexClicked]
            }
        case RESET_STATE:
            return {
                ...state,
                carIndexClicked: '',
                visibilityProduct: false,
                carClicked: ''
            }
        case RESET_SEARCH:
            return {
                ...state,
                list: cars
            }
        default:
            return state;
    }
};

export default reducer;
