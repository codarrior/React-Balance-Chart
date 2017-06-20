import { UPDATE_MONTHLY_PAYMENT } from '../constants/ActionTypes'

const initialState = {
    payment: 0
}

const monthlyPayments = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MONTHLY_PAYMENT: 
            return { payment: action.payment }
        default:
            return state
    }
}

export default monthlyPayments

