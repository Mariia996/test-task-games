import { v4 } from 'uuid';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, Grid, Typography, Link } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getImg } from './imgs';
import { getFilteredGames } from '../../redux/games/games-selectors';
import { useSelector, shallowEqual } from 'react-redux';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  link: {
    width: '80px',
    backgroundColor: '#000000',
    borderRadius: '4px',
    textDecoration: 'none',
    color: '#ffffff',
    padding: '5px 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 250ms linear',
    '&:hover': {
      backgroundColor: '#363636',
    },
  },
  listItem: {
    padding: '0',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    '&:not(:last-child)::after': {
      display: 'block',
      content: '""',
      width: '100%',
      height: '1px',
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
  },
  noData: {
    width: '100%',
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#828282',
  },
  noDataIcon: {
    width: 64,
    height: 64,
    marginBottom: 16,
  },
}));

const GamesList = () => {
  const classes = useStyles();
  const games = useSelector(state => getFilteredGames(state), shallowEqual);

  return (
    <>
      {games.length ? (
        <List sx={{ padding: '0' }}>
          {games?.map(game => (
            <ListItem key={v4()} className={classes.listItem}>
              <Grid container direction="row" flexWrap="nowrap" mb="20px">
                <Grid item flexShrink="0" mr="20px">
                  <img
                    alt={game.name}
                    src={getImg(game.icon)}
                    width="140px"
                    height="140px"
                  />
                </Grid>
                <Grid item>
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: '18px',
                      marginBottom: '5px',
                    }}
                  >
                    {game.name}
                  </Typography>
                  <Typography component="p" sx={{ fontSize: '14px' }}>
                    {game.description}
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    mt="15px"
                  >
                    <Link
                      variant="contained"
                      component={RouterLink}
                      to={`/play/${game.code}`}
                      className={classes.link}
                    >
                      Play{' '}
                      <ArrowForwardIosIcon
                        sx={{ width: '18px', marginLeft: '4px' }}
                      />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      ) : (
        <div className={classes.noData}>
          <ErrorOutlineIcon className={classes.noDataIcon} />
          <Typography>There's no game was found!</Typography>
        </div>
      )}
    </>
  );
};

export default GamesList;
