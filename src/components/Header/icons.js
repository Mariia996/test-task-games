import Eric from '../../images/avatar/eric.jpg';
import Rebecka from '../../images/avatar/rebecka.jpg';
import Stoffe from '../../images/avatar/stoffe.jpg';

export const getIcon = src => {
  switch (src) {
    case 'images/avatar/eric.jpg':
      return Eric;
    case 'images/avatar/rebecka.jpg':
      return Rebecka;
    case 'images/avatar/stoffe.jpg':
      return Stoffe;
    default:
      return null;
  }
};
