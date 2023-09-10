/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Watch.css'
const Watch = ({watch}) => {
    const {name,price} = watch;
    return (
        <div>
            <h3>Name : {name}</h3>
            <h3>price : {price}</h3>
        </div>
    );
};

export default Watch;