export const CHANGE_INPUT = 'CHANGE_INPUT';
export const SEARCH_INPUT = 'SEARCH_INPUT';
export const DISPLAY_SEARCH = 'DISPLAY_SEARCH';
export const SORT_CARS = 'SORT_CARS';
export const DISPLAY_SORT = 'DISPLAY_SORT';
export const GET_CAR_INDEX = 'GET_CAR_INDEX';
export const DISPLAY_CAR_FOUND = 'DISPLAY_CAR_FOUND';
export const RESET_STATE = 'RESET_STATE';
export const RESET_SEARCH = 'RESET_SEARCH';


export const changeInput = (newValue) => ({
    type: CHANGE_INPUT,
    newValue,
});

export const searchInput = () => ({
    type: SEARCH_INPUT,
});

export const displaySearch = () => ({
    type: DISPLAY_SEARCH,
});

export const sortCars = (sortValue) => ({
    type: SORT_CARS,
    sortValue
});

export const displaySort = () => ({
    type: DISPLAY_SORT,
});

export const getCarKey = (index) => ({
    type: GET_CAR_INDEX,
    index
});

export const displayCarFound = () => ({
    type: DISPLAY_CAR_FOUND,
});

export const resetState = () => ({
    type: RESET_STATE
});

export const resetSearch = () => ({
    type: RESET_SEARCH
});