// Nusaiba Mahmood
// ITRJS PP03
// WalletV2.js

import React from 'react'

function WalletV22() {


    return (
        <div>
            
        </div>
    )
}




class WalletV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            input_type: '',
            input_note: '',
            input_amount: 0,

            net_balance: 0,
            total_income: 0,
            total_expenses: 0,

            income:
                [
                    {
                        id: 'inc-0',
                        type: 'inc',
                        amount: 1000,
                        note: 'My Income'
                    },
                    {
                        id: 'inc-1',
                        type: 'inc',
                        amount: 500,
                        note: 'Amazon Giftcard'
                    }
                ],

            expenses:
                [
                    {
                        id: 'exp-0',
                        type: 'exp',
                        amount: 450,
                        note: 'Spent Amazon giftcard'
                    },
                    {
                        id: 'exp-1',
                        type: 'exp',
                        amount: 100,
                        note: 'Monthly Groceries'
                    }
                ],
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    calculateTotals() {

        const total_inc = parseFloat(this.state.income.reduce((acc, item) => { return item.amount + acc }, 0));
        const total_exp = parseFloat(this.state.expenses.reduce((acc, item) => { return item.amount + acc }, 0));
        const net = parseFloat(total_inc - total_exp);

        console.log(total_inc); console.log(this.state.total_income);
        console.log(total_exp); console.log(this.state.total_expenses);
        console.log(net); console.log(this.state.net_balance);

        this.setState({ net_balance: net });
        this.setState({ total_income: total_inc });
        this.setState({ total_expenses: total_exp });

    }

    componentDidMount(){this.calculateTotals();}

    componentDidUpdate(prevProps, prevState) {
        if ((prevState.income.length !== this.state.income.length) || 
            (prevState.expenses.length !== this.state.expenses.length)) {
            this.calculateTotals(); console.log('component did mount?');
        }

    }

    addItem(event) {
        event.preventDefault();

        const newItemType = this.state.input_type;
        const newItemId = (newItemType === 'inc' ? `inc-${this.state.income.length}` : `exp-${this.state.income.length}`);
        const newItem = {
            id: newItemId,
            type: newItemType,
            note: this.state.input_note,
            amount: parseFloat(this.state.input_amount)
        };

        if (newItemType === 'inc') {
            this.setState({ income: [...this.state.income, newItem] });
            console.log('item added to incomes');
            //this.calculateTotals();
        }
        if (newItemType === 'exp') {
            this.setState({ expenses: [...this.state.expenses, newItem] });
            console.log('item added to expenses');
            //this.calculateTotals();
        }
    }

    removeItem(event) {

        const removedItemId = event.target.parentElement.id;

        if (removedItemId.substring(0, 3) === 'inc') {
            const updatedInc = this.state.income.filter((item) => item.id != event.target.parentElement.id);
            this.setState({ income: updatedInc });
            console.log('item removed from income');
            //this.calculateTotals();
        }

        if (removedItemId.substring(0, 3) === 'exp') {
            const updatedExp = this.state.expenses.filter((item) => item.id != event.target.parentElement.id);
            this.setState({ expenses: updatedExp });
            console.log('item removed from expenses');
            //this.calculateTotals();
        }
    }

    render() {
        return (
            <div>
                <h2>FUNKY WALLET</h2>
                <form onSubmit={this.addItem.bind(this)}>

                    <select
                        value={this.state.input_type}
                        onChange={this.handleInputChange.bind(this)}
                        name='input_type' id='input_type' required>

                        <option value='' disabled>+/-</option>
                        <option value='inc'>+</option>
                        <option value='exp'>-</option>
                    </select>

                    <input
                        name='input_note' id='input_note'
                        type="text" size='35' required
                        placeholder='Enter a description'
                        value={this.state.input_note}
                        onChange={this.handleInputChange.bind(this)}
                    />

                    <input
                        name='input_amount' id='input_amount'
                        type="number" min='0' size='15' required
                        placeholder='Enter an amount'
                        value={this.state.input_amount}
                        onChange={this.handleInputChange.bind(this)}
                    />

                    <input type="submit" value="Add" />
                </form>

                <h3 style={{ color: "purple" }}>NET BALANCE: $ {this.state.net_balance}</h3>

                <h3 style={{ color: "green" }}>INCOME: $ + {this.state.total_income}</h3>
                <ul style={{ listStyleType: "none" }}>
                    {
                        this.state.income.map(
                            (item) => <li key={`${item.id}`} id={`${item.id}`}>
                                <button style={{ background: 'salmon' }} onClick={this.removeItem.bind(this)}>x</button>
                                {` $ ${item.amount} ${item.note}`}

                            </li>
                        )
                    }
                </ul>

                <h3 style={{ color: "red" }}>EXPENSES: $ - {this.state.total_expenses}</h3>
                <ul style={{ listStyleType: "none" }}>
                    {
                        this.state.expenses.map(
                            (item) => <li key={`${item.id}`} id={`${item.id}`}>
                                <button style={{ background: 'salmon' }} onClick={this.removeItem.bind(this)}>x</button>
                                {`  $ ${item.amount} ${item.note}`}
                            </li>
                        )
                    }
                </ul>

            </div>

        );
    }
}

export default WalletV2;