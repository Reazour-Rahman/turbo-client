import React from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import "./AnalyticChart.css"

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";

const AnalyticChart = () => {
    return (
        <div className="chart-body" id={card}>
            <div className="container">
                <div className="chart">
                    <PieChart width={300} height={300} >
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div className="counter-container" id={text}>
                    <div className="counter">
                        <li>Facebook</li>
                        <small>213423</small>
                    </div>
                    <div className="counter">
                        <li>Facebook</li>
                        <small>213423</small>
                    </div>
                    <div className="counter">
                        <li>Facebook</li>
                        <small>213423</small>
                    </div>
                    <div className="counter">
                        <li>Facebook</li>
                        <small>213423</small>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AnalyticChart;


