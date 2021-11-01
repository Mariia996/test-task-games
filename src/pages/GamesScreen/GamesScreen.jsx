import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Container, Divider, Typography } from '@mui/material';
import Header from '../../components/Header';
import GamesList from '../../components/GamesList';
import CategoriesList from '../../components/CategoriesList';
import { getAllGames } from '../../redux/games/games-operations';
import { getAllCategories } from '../../redux/games/games-operations';

const GamesScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <Container sx={{ bgcolor: '#ffffff', height: '100%', minHeight: '100vh' }}>
      <Header />
      <Grid container direction="row" pb="20px" flexWrap="nowrap">
        <Grid item flexGrow="1" pr="20px">
          <Grid container direction="column">
            <Typography
              component="h2"
              sx={{ fontWeight: 700, fontSize: '20px', color: '#363636;' }}
            >
              Games
            </Typography>
            <Divider sx={{ width: '100%' }} mb="20px" />
            <GamesList />
          </Grid>
        </Grid>
        <Grid item sx={{ width: '280px', flexShrink: '0' }}>
          <Typography
            component="h2"
            sx={{ fontWeight: 700, fontSize: '20px', color: '#363636;' }}
          >
            Categories
          </Typography>
          <Divider sx={{ width: '100%' }} mb="20px" />
          <CategoriesList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GamesScreen;
