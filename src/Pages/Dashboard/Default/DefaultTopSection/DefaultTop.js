import React from 'react';
import Revenue from './Revenue'
import Cost from './Cost'
import Commission from './Commission'
import '../Default.css'

const DefaultTop = () => {
    return (
        <div className='top-three-container'>
            <Revenue/>
            <Commission/>
            <Cost/>
        </div>
    );
};

export default DefaultTop;