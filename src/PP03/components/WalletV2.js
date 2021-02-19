// Nusaiba Mahmood
// ITRJS PP03
// WalletV2.js

import React from 'react'
import { useState, useEffect } from 'react';

function FunkyWallet() {

    const [inputType, setInputType] = useState('');
    const [inputNote, setInputNote] = useState('');
    const [inputAmount, setInputAmount] = useState(0);

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);

    const [netBalance, setNetBalance] = useState(0);
    const [totalIncomes, setTotalIncome] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => { calculateTotals(); }, [incomes, expenses, netBalance, totalExpenses, totalIncomes])

    const addItem = (event) => {
        event.preventDefault();

        const item_id = inputType === 'inc' ?
            `inc-${incomes.length + inputAmount}-${inputNote.charAt(0)}` :
            `exp-${expenses.length + inputAmount}-${inputNote.charAt(0)}`;
        
        const item = { item_id, inputType, inputAmount, inputNote };

        if (inputType === 'inc') { setIncomes([...incomes, item]); }
        if (inputType === 'exp') { setExpenses([...expenses, item]); }

    }

    const removeItem = (event) => {

        const removee = event.target.parentElement.id;

        if (removee.substring(0, 3) === 'inc') {
            console.log(incomes);
            setIncomes(incomes.filter((item) => item.item_id !== event.target.parentElement.id));
            console.log(`ITEM : << ${removee} >> REMOVED from income.`);
            console.log(incomes);
        }
        if (removee.substring(0, 3) === 'exp') {
            console.log(expenses);
            setExpenses(expenses.filter((item) => item.item_id !== event.target.parentElement.id));
            console.log(`ITEM : << ${removee} >> REMOVED from expenses.`);
            console.log(expenses);
        }
    }

    const calculateTotals = () => {

        setTotalIncome(incomes.reduce((acc, item) => { return item.inputAmount + acc }, 0));
        setTotalExpenses(expenses.reduce((acc, item) => { return item.inputAmount + acc }, 0));
        setNetBalance(totalIncomes - totalExpenses);

        console.log(totalIncomes);
        console.log(totalExpenses);
        console.log(netBalance);
    }

    /**
    const state = {

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
    */

    return (
        <div>
            <h2>FUNKY WALLET</h2>
            <form onSubmit={addItem}>

                <select
                    value={inputType}
                    onChange={e => setInputType(e.target.value)}
                    name='input_type' id='input_type' required>

                    <option value='' disabled>+/-</option>
                    <option value='inc'>+</option>
                    <option value='exp'>-</option>
                </select>

                <input
                    name='input_note' id='input_note'
                    type="text" size='35' required
                    placeholder='Enter a description'
                    value={inputNote}
                    onChange={e => setInputNote(e.target.value)}
                />

                <input
                    name='input_amount' id='input_amount'
                    type="number" min='0' size='15' required
                    placeholder='Enter an amount'
                    value={inputAmount}
                    onChange={e => setInputAmount(parseFloat(e.target.value))}
                />

                <input type="submit" value="Add" />
            </form>

            <h3 style={{ color: "purple" }}>NET BALANCE: $ {netBalance}</h3>

            <h3 style={{ color: "green" }}>INCOME: $ + {totalIncomes}</h3>
            <ul style={{ listStyleType: "none" }}>
                {
                    incomes.map(
                        (item) => <li key={`${item.item_id}`} id={`${item.item_id}`}>
                            <button style={{ background: 'salmon' }} onClick={removeItem}>x</button>
                            {` $ ${item.inputAmount} ${item.inputNote}`}

                        </li>
                    )
                }
            </ul>

            <h3 style={{ color: "red" }}>EXPENSES: $ - {totalExpenses}</h3>
            <ul style={{ listStyleType: "none" }}>
                {
                    expenses.map(
                        (item) => <li key={`${item.item_id}`} id={`${item.item_id}`}>
                            <button style={{ background: 'salmon' }} onClick={removeItem}>x</button>
                            {` $ ${item.inputAmount} ${item.inputNote}`}
                        </li>
                    )
                }
            </ul>

        </div>
    )
}

export default FunkyWallet;