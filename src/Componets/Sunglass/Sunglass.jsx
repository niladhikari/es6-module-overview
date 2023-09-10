/* eslint-disable no-unused-vars */
import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import {add,multy,numberOneAndNumberTwoDivision as divition} from '../../Ulites/Calculate';

const Sunglass = () => {
    const num1 = 12;
    const num2 = 14;
    const sum = add(num1,num2)
    const mul = multy(num1,num2)
    const div = divition(num1,num2)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;