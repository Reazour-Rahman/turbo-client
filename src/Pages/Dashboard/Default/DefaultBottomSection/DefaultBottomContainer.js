import React from 'react';
import '../Default.css'
import NewMembers from './NewMembers.tsx';
import Transaction from './Transaction.tsx';
import { useSelector } from 'react-redux';

const DefaultBottomContainer = () => {
    const user = useSelector((state) => state.firebase.user)
    return (
        <div>
            <main className='default-bottom-container'>
                {/* :::::::::::::::::
                New Members (Left)
                ::::::::::::::::::*/}
                <section>
                <NewMembers user={user}/>
                </section>
                {/* :::::::::::::::::
                Transaction (right)
                ::::::::::::::::::*/}
                <section>
                <Transaction user={user}/>
                </section>
            </main>
        </div>
    );
};

export default DefaultBottomContainer;