import React, { PropTypes, Component } from 'react'

export default class SentimentNews extends Component {

    static propTypes = {
        balances: PropTypes.array.isRequired,
        onAddBalance: PropTypes.func.isRequired
    }

    state = {
        balance: ''
    }

    handleSubmit = e => {
        var value = parseInt(this.state.balance)
        this.setState({ balance: ''})
        this.props.onAddBalance(value)
    }

    handleChange = e => {
        this.setState({ balance: e.target.value })
    }

    render() {
        let balances = this.props.balances;
        let balanceCount = balances.length;
        console.log(balances);
        var balanceLists = balances.map((item, index) => {
            return (
                <li>Balance {item}</li>
            )
        })

        return (
            <div className="accounts">
                <h1>Accounts</h1>
                <div className="input-balance">
                    Count: {balanceCount}<br/><br/>
                    Balance <input type="text" value={this.state.balance} onChange={this.handleChange} /><br/>
                    <input type="button" value="submit" onClick={this.handleSubmit} /><br/>
                </div>
                
                <ul className="balance-list">
                    {balanceLists}
                </ul>
            </div>

        )
    }
}
