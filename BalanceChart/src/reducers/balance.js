import { ADD_BALANCE } from '../constants/ActionTypes'

const initialState = {
    balances: []
}

const balances = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BALANCE: 
            return { balances: [...state.balances, action.balance] }
        default:
            return state
    }
}

export default balances

