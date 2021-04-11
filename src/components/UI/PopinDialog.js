import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    background: "#F4F7FC",
  },
  title: {
    fontWeight: 500,
  },
  content: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  action: {
    width: "100%",
    justifyContent: "space-around",
    "& span": {
      padding: theme.spacing(0, 1),
    },
    "& button": {
      margin: theme.spacing(0, 1),
    },
  },
}));

export const PopinDialog = ({
  open,
  title,
  description,
  cancelLabel,
  validateLabel,
  onClose,
  onValidate,
  validateOnly = false,
  topContent = null,
  bottomContent = null,
}) => {
  const classes = useStyles();

  const handleValidate = () => {
    onClose && onClose();
    onValidate && onValidate();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ className: classes.container }}
      fullWidth
      disableBackdropClick
      disableEscapeKeyDown
    >
      {topContent && <DialogContent className={classes.content}>{topContent}</DialogContent>}

      <DialogTitle disableTypography>
        <Typography component="span" className={classes.title} variant="subtitle1" color="textPrimary">
          {title}
        </Typography>
      </DialogTitle>

      <DialogContent className={classes.content}>
        <DialogContentText>
          <Typography component="span" variant="subtitle2" color="textPrimary">
            {description}
          </Typography>
        </DialogContentText>
      </DialogContent>

      {bottomContent && <DialogContent className={classes.content}>{bottomContent}</DialogContent>}

      <DialogActions className={classes.action}>
        {!validateOnly && <Button onClick={onClose} variant="contained" color="secondary">
          <Typography variant="button" color="primary">{cancelLabel}</Typography>
        </Button>}
        <Button onClick={handleValidate} variant="contained" color="primary">
          <Typography variant="button" color="secondary">{validateLabel}</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
