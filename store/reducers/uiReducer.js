const initialState = {
    toggleMenuPhone: true
}

export function uiReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'TOGGLE_MENU_PHONE':
            const stateToggle = !state.toggleMenuPhone;
            return {...state, toggleMenuPhone: stateToggle }
        case 'CLOSE_MENU_PHONE':
            return {...state, toggleMenuPhone: true }
        default:
            return state
    }
}