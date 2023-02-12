import { FunctionComponent } from "react";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import "../Default.css";

const data = [
  {
    name: "01 Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "02 Jan",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "03 Jan",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "04 Jan",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "05 Jan",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "06 Jan",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "07 Jan",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "08 Jan",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "09 Jan",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10 Jan",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "11 Jan",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomizedLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill="#f0f8ff" fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  let mode;
  mode = localStorage.getItem("theme");
  const text = mode === "light" ? "black" : "darkLight";
  const card = mode === "light" ? "moreLight" : "moreDark";
  const bg = mode === "light" ? "lightest" : "darkish";

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        fontSize={10}
        textAnchor="end"
        fill="#f0f8ff"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};
const CustomizedYAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} fontSize={10} textAnchor="end" fill="#f0f8ff">
        {payload.value}
      </text>
    </g>
  );
};

export default function Visitors() {
  /* Send Visitors Data  */
  const [visit, setVisit] = useState([]);

  useEffect(() => {
    fetch("https://proplayer-backend.vercel.app/uniqueVisitors")
      .then((res) => res.json())
      .then((data) => {
        // data.map(d => setVisit(d))
        setVisit(data);
      });
  }, [visit]);

  return (
    <ResponsiveContainer height={450}>
      <LineChart data={visit.slice(-10)}>
        <CartesianGrid strokeDasharray="0 0" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis tick={<CustomizedYAxisTick />} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#32CD32">
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line type="monotone" dataKey="uv" stroke="#007aff" />
      </LineChart>
    </ResponsiveContainer>
  );
}
