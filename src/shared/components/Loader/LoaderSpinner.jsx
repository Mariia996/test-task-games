import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './LoaderSpinner.module.scss';

const LoaderSpinner = () => {
  return (
    <>
      <Loader
        className={s.loader}
        type="Audio"
        color="#ffffff"
        height={50}
        width={50}
      />
    </>
  );
};

export default LoaderSpinner;
