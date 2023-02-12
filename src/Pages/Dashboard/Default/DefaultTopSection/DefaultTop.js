import React, { useEffect, useState } from 'react';
import Revenue from './Revenue'
import Cost from './Cost'
import Commission from './Commission'
import '../Default.css'

const DefaultTop = () => {
    const [cost, setCost] = useState([])
  useEffect(() => {
    fetch('https://proplayer-backend.vercel.app/cost')
    .then(res => res.json())
    .then(data => setCost(data))
  },[])

  const [revenue, setRevenue] = useState([])
  useEffect(() => {
    fetch('https://proplayer-backend.vercel.app/revenue')
    .then(res => res.json())
    .then(data => setRevenue(data))
  },[])

  console.log(revenue, cost);
    return (
        <div className='top-three-container'>
            <Revenue revenue ={revenue} cost={cost}  />
            <Commission revenue ={revenue} cost={cost} />
            <Cost cost={cost}/>
        </div>
    );
};

export default DefaultTop;