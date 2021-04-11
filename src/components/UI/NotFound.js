import { makeStyles } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
}));

export const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormattedMessage id="notFound.content" />
    </div>
  );
};
