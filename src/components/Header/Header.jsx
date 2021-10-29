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
  IconButton,
  Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getUser } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { getIcon } from './icons';

const Header = ({ handleClickSearch }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => getUser(state));
  const [searchValue, setSearchValue] = useState('');

  const handleLogoutClick = () => {
    dispatch(logOut({ username: user?.username }));
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
            <InputLabel htmlFor="outlined-adornment-password">
              Search Game
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={searchValue}
              onChange={({ target: { value } }) => setSearchValue(value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickSearch}
                    edge="end"
                  >
                    {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                  </IconButton>
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
