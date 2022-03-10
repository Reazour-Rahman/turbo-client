import React from 'react';
import AnalyticChart from '../AnalyticChart/AnalyticChart';
import AnalyticMap from '../AnalyticMap/AnalyticMap';
import AnalyticPage from '../AnalyticPage/AnalyticPage';
import VisitorChart from '../VisitorChart/VisitorChart';

const Analytics = () => {
    return (
        <div>    
                    
            <AnalyticMap></AnalyticMap>          
            <AnalyticChart></AnalyticChart>
            <AnalyticPage></AnalyticPage>
            <VisitorChart></VisitorChart>               
        </div>
    );
};

export default Analytics;