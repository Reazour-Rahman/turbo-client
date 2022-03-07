import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Progress({ progressBar }) {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop:"8px", marginBottom:"8px" }}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="buffer"
          value={progressBar}
          valueBuffer={buffer}
        />
      </Box>
      <small>{progressBar}%</small>
    </div>
  );
}
