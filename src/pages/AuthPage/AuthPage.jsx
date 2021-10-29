import { Container } from '@mui/material';
import AuthForm from '../../components/AuthForm';

import s from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <Container maxWidth="sm">
      <AuthForm />
    </Container>
  );
};

export default AuthPage;
