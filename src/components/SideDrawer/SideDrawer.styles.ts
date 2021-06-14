import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex'
  },
  drawerPaper: {
    width: theme.drawer.width,
    padding: theme.spacing(3)
  },
}));
