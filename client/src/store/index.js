import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    Tickets: [],
    localAdmin: "",
    localSuperAdmin: ""
}

function reducer ( state = initialState, action ) {
    switch(action.type) {
        case "SET_LOCAL_ADMIN":
            return { ...state, localAdmin: action.payload}
        case "SET_LOCAL_SUPERADMIN":
            return { ...state, localSuperAdmin: action.payload}
        default :
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store