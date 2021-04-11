import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  "@global": {
    html: {
      height: "100%",
      overflowX: "hidden",
      overflowY: "scroll",
    },
    body: {
      height: "100%",
    },
  },
});

export const GlobalCSS = () => {
  useStyles();
  return <CssBaseline />;
};
