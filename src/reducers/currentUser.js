const currentUser = (state, action) => {
    const initalState = {};

    if (!state) {
        state = initalState;
    }

    switch (action.type) {
        case "SET_USER":
            {
                state = Object.assign({}, state, {
                    user: action.payload,
                    loggedIn: true
                })
                return state;
            }
        case "LOG_OUT":
            {
                state = Object.assign({}, state, {
                    user: {},
                    loggedIn: false
                })
                return state;
            }
        default:
            return state
    }
}

export default currentUser;