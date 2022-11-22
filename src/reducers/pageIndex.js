const pageIndexReducer = (state = 0, action) => {
    switch(action.type) {
        case 'PAGECHANGE':
            state = action.page;
            return state;
        default:
            return state;
    }
}

export default pageIndexReducer;