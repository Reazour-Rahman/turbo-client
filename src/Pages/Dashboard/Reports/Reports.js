import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import React, { useEffect, useState } from "react";
import "./Reports.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import HelpMessage from "./HelpMessage/HelpMessage";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Reports = () => {
  //   const [graph, setGraph] = useState(helpMessage);
  const [action, setAction] = useState("");
  const handleChange = (event) => {
    setAction(event.target.value);
  };
  const helpMessage = [
    {
      name: "Page A",
      uv: 4000,
      helpMessage: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      helpMessage: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      helpMessage: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      helpMessage: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      helpMessage: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      helpMessage: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      helpMessage: 4300,
      amt: 2100,
    },
  ];

  const reports = [
    {
      name: "Page A",
      uv: 4000,
      reports: 1200,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      reports: 2500,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      reports: 2400,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      reports: 2000,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      reports: 5600,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      reports: 4800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      reports: 2500,
      amt: 2100,
    },
  ];

  const reportsData = [
    {
      name: "Reazour Rahman Rabbi",
      id: "45664456",
    },
    {
      name: "Kazi Fahad Kibria",
      id: "82129296",
    },
    {
      name: "Mehedi Hasan",
      id: "32564452",
    },
    {
      name: "Sanalul Islam",
      id: "78945612",
    },
    {
      name: "Reazour Rahman Rabbi",
      id: "45678912",
    },
    {
      name: "Sanaul Islam",
      id: "14785265",
    },
  ];

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/userhelp`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";
  return (
    <div className="">
      <main>
        {/* ::::::::::::::::::::::::::::::::
Chart Grid
::::::::::::::::::::::::::::::::::*/}
        <section className="chart-grid-container">
          <aside className="left-chart" id={card}>
            <h1 className="report-header" id={text}>20K help messages this week</h1>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                  data={helpMessage}
                  margin={{
                    top: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="helpMessage"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </aside>
          <aside className="right-chart" id={card}>
            <h1 className="report-header" id={text}>20K help reports this week</h1>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                  data={reports}
                  margin={{
                    top: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="reports"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </aside>
        </section>

        {/* ::::::::::::::::::::::::::::::::
User Help messages Grid
::::::::::::::::::::::::::::::::::*/}
        <section className="help-message-grid-container">
          <aside className="left-message">
            <h1
              className="report-header"
              style={{  paddingBottom: "10px" }}  id={card}
            >
              <span  id={text}>Help Messages</span>
            </h1>
            {/* :::: Messages:::: */}
            <div>
              {messages.map((message) => (
                <Box className="report-message">
                  <HelpMessage
                    helpMessage={message}
                    key={message._id}
                  ></HelpMessage>
                </Box>
              ))}
            </div>
          </aside>

          {/* :::right section:::: */}
          <aside className="right-message">
            <h1
              className="report-header"
              style={{  paddingBottom: "10px" }}  id={card}
            >
              <span  id={text}>Reports</span>
            </h1>
            <Box className="">
              {/* :::: reports::::::::: */}
              <div>
                {reportsData.map((report) => (
                  <div className="report-container report-message fix-font-weight"  id={card}>
                    <div>
                      <h1 className="reports-gap">
                        <b  id={text}>{report.name}</b>
                      </h1>
                      <h1  id={text}>email</h1>
                    </div>
                    <div className="report-post-id">
                      <h1 className="reports-gap">
                        <b  id={text}>Post ID: {report.id}</b>
                      </h1>
                    </div>
                    <div>
                      {/*::::::: select dropdown::::::::: */}
                      <FormControl fullWidth>
                        <InputLabel
                           id={text}
                          sx={{ color: "white" }}
                        >
                          Take Action
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={action}
                          label="Take Action"
                          onChange={handleChange}
                          sx={{ color: "white" }}
                        >
                          <MenuItem value={"See "}>See The Post</MenuItem>
                          <MenuItem value={"Hide"}>Hide The Post</MenuItem>
                          <MenuItem value={"Delete"}>Delete The Post</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          </aside>
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default Reports;
