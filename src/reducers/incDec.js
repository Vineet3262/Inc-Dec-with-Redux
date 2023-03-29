const initialState = 0;

const incDecNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": {
            return state + action.payload;
        } break;
        case "DECREMENT": {
            return state - action.payload;
        } break;
        default: return state;
    }
}

export default incDecNumber;