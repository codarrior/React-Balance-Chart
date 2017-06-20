import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { addBalance, updateMonthlyPayment } from '../actions'

import Accounts from '../components/Accounts'
import BalanceChart from '../components/BalanceChart'
import MonthlyPayment from '../components/MonthlyPayment'

class AppContainer extends Component {
    static propTypes = {
        balance: PropTypes.object.isRequired,
        monthlyPayment: PropTypes.object.isRequired
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Accounts balances={this.props.balance.balances} onAddBalance={this.props.onAddBalance}></Accounts>
                <MonthlyPayment balances={this.props.balance.balances} payment={this.props.monthlyPayment.payment} onUpdateMonthlyPayment={this.props.onUpdateMonthlyPayment}></MonthlyPayment>
                <BalanceChart balances={this.props.balance.balances} payment={this.props.monthlyPayment.payment}></BalanceChart>
            </div>            
        )
    }
}
 

const mapStateToProps = (state) => {
    const { balance, monthlyPayment } = state
    return {
        balance, monthlyPayment
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddBalance: (value) => {
        dispatch(addBalance(value))
    },
    onUpdateMonthlyPayment: (value) => {
        dispatch(updateMonthlyPayment(value))
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)