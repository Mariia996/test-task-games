import JackHammer from '../../images/game-icon/jackhammer.jpg';
import Starburst from '../../images/game-icon/starburst.jpg';
import JackAndBeansTalk from '../../images/game-icon/jackandbeanstalk.jpg';
import DeadOrAlive from '../../images/game-icon/deadoralive.jpg';
import TwinSpin from '../../images/game-icon/twinspin.jpg';

export const getImg = src => {
  switch (src) {
    case 'images/game-icon/jackhammer.jpg':
      return JackHammer;
    case 'images/game-icon/starburst.jpg':
      return Starburst;
    case 'images/game-icon/jackandbeanstalk.jpg':
      return JackAndBeansTalk;
    case 'images/game-icon/deadoralive.jpg':
      return DeadOrAlive;
    case 'images/game-icon/twinspin.jpg':
      return TwinSpin;
    default:
      return null;
  }
};
