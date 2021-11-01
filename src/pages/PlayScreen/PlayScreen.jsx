import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Game from '../../lib/comeon.game-1.0';
import { useParams, useHistory } from 'react-router-dom';
import { Grid, Container, Divider, Typography, Button } from '@mui/material';
import { getGames } from '../../redux/games/games-selectors';

const PlayScreen = () => {
  const { type } = useParams();
  const history = useHistory();

  const games = useSelector(state => getGames(state));

  const title = useMemo(() => {
    const game = games?.find(game => game.code === type);
    return game?.name;
  }, [games, type]);

  return (
    <Container
      sx={{
        bgcolor: '#ffffff',
        paddingTop: '20px',
        paddingBottom: '20px',
        height: '100%',
        minHeight: '100vh',
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pb="20px"
      >
        <Grid item>
          <Typography
            component="h2"
            sx={{ fontWeight: 700, fontSize: '20px', color: '#363636;' }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => history.goBack()}
          >
            Go back
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt="20px"
      >
        <Game t={type} />
      </Grid>
    </Container>
  );
};

export default PlayScreen;
