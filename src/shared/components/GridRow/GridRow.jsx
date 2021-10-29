import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  fieldHolder: {
    display: 'flex',
    'flex-direction': 'column',
    paddingBottom: '30px!important',
  },
}));

export default function GridRow({ firstColumn, secondColumn }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      <Grid className={classes.fieldHolder} item xs={6}>
        {!!firstColumn ? '' : { firstColumn }}
      </Grid>
      <Grid className={classes.fieldHolder} item xs={6}>
        {!!secondColumn ? '' : { secondColumn }}
      </Grid>
    </Grid>
  );
}
