import {
  List,
  ListItem,
  Divider,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getGames } from '../../redux/games/games-selectors';
import { useSelector, shallowEqual } from 'react-redux';

const GamesList = () => {
  const games = useSelector(state => getGames(state), shallowEqual);

  const handlePlayClick = code => {};

  return (
    <List>
      {games?.map(game => (
        <ListItem key={game.code} sx={{ paddingRight: 0, paddingLeft: 0 }}>
          <Grid container direction="row">
            <Grid item>
              <img alt="" src="#"></img>
            </Grid>
            <Grid item>
              <Typography
                component="h3"
                sx={{ fontWeight: 700, fontSize: '18px' }}
              >
                {game.name}
              </Typography>
              <Typography component="p">{game.description}</Typography>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
                color="success"
                onClick={() => handlePlayClick(game.code)}
              >
                Play
              </Button>
              <Divider sx={{ width: '100%' }} mb="20px" />
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default GamesList;
