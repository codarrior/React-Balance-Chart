import React, { PropTypes, Component } from 'react'

export default class SentimentNews extends Component {

    static propTypes = {
        balances: PropTypes.array.isRequired,
        payment: PropTypes.number,
        onUpdateMonthlyPayment: PropTypes.func.isRequired
    }

    state = {
        payment: this.props.payment || 0
    }

    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onUpdateMonthlyPayment(parseInt(text))
        }

    }

    handleChange = e => {
        this.setState({ payment: e.target.value })
    }

    render() {
        let balances = this.props.balances
        let balancesSum = 0
        for (let i = 0; i < balances.length; i++) {
            balancesSum = balancesSum + balances[i]
        }

        return (
            <div className="monthly-payment">
                <h2>Initial Balance: {balancesSum}</h2>
                Monthly Payment <input type="text" value={this.state.payment} onChange={this.handleChange} onKeyDown={this.handleSubmit}/>
                <hr/>
            </div>
        )
    }
}
