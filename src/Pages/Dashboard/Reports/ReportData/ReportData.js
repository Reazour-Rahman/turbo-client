import React from "react";

const ReportData = () => {
  return (
    <div className="report-container report-message fix-font-weight">
      <div>
        <h1 className="reports-gap">
          <b>{report.name}</b>
        </h1>
        <h1>email</h1>
      </div>
      <div className="report-post-id">
        <h1 className="reports-gap">
          <b>Post ID: {report.id}</b>
        </h1>
      </div>
      <div>
        {/*::::::: select dropdown::::::::: */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
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
  );
};

export default ReportData;
