import { combineReducers } from 'redux'

import balance from './balance'
import monthlyPayment from './monthlyPayment'

export default combineReducers({
    balance, monthlyPayment
})
