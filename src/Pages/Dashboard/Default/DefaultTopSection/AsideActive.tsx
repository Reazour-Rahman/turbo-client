import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 2500 },
  { name: "Page C", uv: 5000 },
  { name: "Page D" },
  { name: "Page E", uv: 2000 },
  { name: "Page F", uv: 6000 },
  { name: "Page G", uv: 7090 },
];

export default function AsideActive() {
  return (
      <ResponsiveContainer height={150}>
        <LineChart
        //   height={200}
          data={data}

        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
  );
}
