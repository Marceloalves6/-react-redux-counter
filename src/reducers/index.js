let initialState = { count: 0 }

export default function counterReducer(state = initialState, action) {

    switch (action.type) {
        case 'INCREASE':
            return { count: state.count + 1 }
        case 'DECREASE':
            return { count: state.count - 1 }
        default:
            return state;
    }
}