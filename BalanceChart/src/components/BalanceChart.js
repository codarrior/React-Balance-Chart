import React, { PropTypes, Component } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class BalanceChart extends Component {

    static propTypes = {
        balances: PropTypes.array.isRequired,
        payment: PropTypes.number.isRequired
    }

    render() {

        let balances = this.props.balances
        let payment = this.props.payment
        let balancesSum = 0
        for (let i = 0; i < balances.length; i++) {
            balancesSum = balancesSum + balances[i]
        }

        let data = []
        let month = 0
        let chart = (<div></div>)

        if (payment > 0) {
            while (balancesSum >= 0) {
                data.push({
                    name: month,
                    balance: balancesSum
                })
                month++

                if (balancesSum == 0)
                    break;
                balancesSum = Math.max(0, balancesSum - payment)
            }
            chart = (
                <LineChart width={600} height={300} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name" axisLine={{strokeDasharray:"5 5"}}/>
                    <YAxis axisLine={{strokeDasharray:"5 5"}} />
                    <Line type="monotone" dataKey="balance" stroke="#8884d8"  />
                </LineChart>
            )
        } 

        return (
            <div className="balance-chart">
                <h3>Balance of accounts after a number of months</h3>
                {chart}
            </div>

        )
    }
}
