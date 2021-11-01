import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { List, ListItem, Button } from '@mui/material';
import { getCategories, getGames } from '../../redux/games/games-selectors';
import { setFilteredGames } from '../../redux/games/games-operations';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => getCategories(state));
  const games = useSelector(state => getGames(state));

  const handleCategoryClick = id => {
    const filteredGames = games.filter(game => game.categoryIds.includes(id));
    dispatch(setFilteredGames(filteredGames));
  };

  return (
    <List sx={{ padding: '0', marginTop: '20px' }}>
      {categories.map(category => (
        <ListItem key={v4()} sx={{ padding: '0' }}>
          <Button
            color="secondary"
            onClick={() => handleCategoryClick(category.id)}
            sx={{
              padding: '0 5px',
              width: '100%',
              justifyContent: 'flex-start',
              fontSize: '18px',
              fontWeight: 700,
            }}
          >
            {category.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesList;
