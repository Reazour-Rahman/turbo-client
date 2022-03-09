import React from 'react';
import './Default.css'
import DefaultTopContainer from './DefaultTopSection/DefaultTopContainer';
import DefaultBottomContainer from './DefaultBottomSection/DefaultBottomContainer';

const Default = () => {
    return (
        <div>
            <DefaultTopContainer/>
            <DefaultBottomContainer/>
        </div>
    );
};

export default Default;