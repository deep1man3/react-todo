import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawerPaper: {
    width: 280,
    padding: theme.spacing(3)
  },
}));
