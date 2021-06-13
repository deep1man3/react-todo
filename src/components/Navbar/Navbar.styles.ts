import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  navbar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
}));
