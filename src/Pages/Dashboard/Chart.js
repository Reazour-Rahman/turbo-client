import * as React from 'react';

import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', undefined),
];

export default function Chart() {
    // const theme = useTheme();
    let mode;
    mode = localStorage.getItem("theme")

    return (
        <React.Fragment>
            <Title>Today</Title>
            <ResponsiveContainer>
                <LineChart
                
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                    id={ mode === "light" ? "black" : "darkLight" }
                        dataKey="time"
                        // stroke={theme.palette.text.secondary}
                        // style={theme.typography.body2}
                    />
                    <YAxis
                    id={ mode === "light" ? "black" : "darkLight" }
                        // stroke={theme.palette.text.secondary}
                        // style={theme.typography.body2}
                    >
                        <Label
                        id={ mode === "light" ? "black" : "darkLight" }
                            angle={270}
                            position="left"
                            style={{
                                textAnchor: 'middle',
                                // fill: theme.palette.text.primary,
                                // ...theme.typography.body1,
                            }}
                        >
                            Today Views
                        </Label>
                    </YAxis>
                    <Line
                    id={ mode === "light" ? "black" : "darkLight" }
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="amount"
                        // stroke={theme.palette.primary.main}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}