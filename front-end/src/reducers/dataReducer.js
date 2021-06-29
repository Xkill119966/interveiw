import { ADD_DATA, LOAD_BAR, LOAD_PIE } from "../action/constant/action-type";


const initialState = {
    bar: null,
    pie: null
};


function dataReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_BAR:
            return { ...state, bar: action.bar };
        case LOAD_PIE:
            return { ...state, pie: action.pie };
        case ADD_DATA:
            return [...state, action.data];
        default:
            return state;
    }
};

export default dataReducer;