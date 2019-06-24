const quest = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_GUEST':
            return [ {}, ...state];
        default:
            return state;
    }
};