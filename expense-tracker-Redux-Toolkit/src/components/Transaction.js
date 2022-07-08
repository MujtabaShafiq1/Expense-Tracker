import React, {useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount > 0 ? '+' : "-";
    const propery = sign === '+' ? 'plus' : 'minus'


    return (
        <>
            <li className={propery}>
                {transaction.text}
                <span>{sign}{Math.abs(transaction.amount)}$</span>
                <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>
                    x
                </button>
            </li>
        </>
    )
}

export default Transaction