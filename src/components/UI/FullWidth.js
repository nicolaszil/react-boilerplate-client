import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  fullWidth: {
    position: "relative",
    width: "100vw",
    left: "50%",
    right: "50%",
    margin: "0 -50vw",
  },
}));

export const FullWidth = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.fullWidth}>
      {children}
    </div>
  );
};
