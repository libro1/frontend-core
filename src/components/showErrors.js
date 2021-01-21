import React from "react";
import Alert from "@material-ui/lab/Alert";
import { Box } from "@material-ui/core";

function ShowErrors({ list }) {
  return (
    <Box mb={4}>
      {list.map((error) => (
        <Alert severity="error">{error.msg}</Alert>
      ))}
    </Box>
  );
}

export default ShowErrors;
