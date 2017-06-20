import * as types from '../constants/ActionTypes'

/**
 * BALANCE
 */

export const addBalance = balance => ({
    type: types.ADD_BALANCE,
    balance: balance
})

/**
 * MONTHLY PAYMENT
 */

export const updateMonthlyPayment = payment => ({
    type: types.UPDATE_MONTHLY_PAYMENT,
    payment: payment
})