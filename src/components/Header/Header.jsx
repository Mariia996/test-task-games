import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  Grid,
  InputLabel,
  Avatar,
  Typography,
  OutlinedInput,
  FormControl,
  InputAdornment,
  Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import { getUser } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { getIcon } from './icons';
import { getGames } from '../../redux/games/games-selectors';
import { setFilteredGames } from '../../redux/games/games-operations';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => getUser(state));
  const games = useSelector(state => getGames(state));
  const [searchValue, setSearchValue] = useState('');

  const handleLogoutClick = () => {
    dispatch(logOut({ username: user?.username }));
  };

  const handleChangeSearch = value => {
    setSearchValue(value);
    const searchResult = games.filter(
      game =>
        game.name.toLowerCase() === searchValue.toLowerCase() ||
        game.code === searchValue.toLowerCase() ||
        game.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    value
      ? dispatch(setFilteredGames(searchResult))
      : dispatch(setFilteredGames(games));
  };

  return (
    <Grid container p="20px 0 20px 0">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Grid item mr="15px">
              <Avatar alt={user?.name} src={getIcon(user?.avatar)} />
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                {user?.name}
              </Typography>
              <Typography sx={{ fontSize: 15 }}>{user?.event}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <FormControl
            sx={{ m: 1, width: '25ch' }}
            variant="outlined"
            size="small"
            margin="none"
          >
            <InputLabel htmlFor="search">Search Game</InputLabel>
            <OutlinedInput
              id="search"
              value={searchValue}
              onChange={({ target: { value } }) => handleChangeSearch(value)}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
              label="Search Game"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction="row" mt="10px">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ArrowBackIosIcon />}
          onClick={handleLogoutClick}
        >
          Log Out
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
