import React from 'react';
import '../Default.css'
import NewMembers from './NewMembers.tsx';
import Transaction from './Transaction.tsx';

const DefaultBottomContainer = () => {
    return (
        <div>
            <main className='default-bottom-container'>
                {/* :::::::::::::::::
                New Members (Left)
                ::::::::::::::::::*/}
                <section>
                <NewMembers/>
                </section>
                {/* :::::::::::::::::
                Transaction (right)
                ::::::::::::::::::*/}
                <section>
                <Transaction/>
                </section>
            </main>
        </div>
    );
};

export default DefaultBottomContainer;