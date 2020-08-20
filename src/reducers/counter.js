const counter = (state, action) => {
    const initialState = 0;

    if (!state) {
        state = initialState
    }

    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
            return state
    }
}

export default counter