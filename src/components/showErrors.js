import React from "react";
import propTypes from 'prop-types';
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

ShowErrors.propTypes = {
  list: propTypes.array,
}

export default ShowErrors;
