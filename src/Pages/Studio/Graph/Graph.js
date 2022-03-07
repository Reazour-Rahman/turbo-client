import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const Graph = (props) => {
  //   console.log(props.data);
  const data = props.data;

  return (
    <div style={{ width: "80%", margin: "10px auto 0", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 0 3" />
          <XAxis dataKey="name"> </XAxis>
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="yAxis"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
