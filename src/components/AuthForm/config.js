import * as Yup from 'yup';

export const initialValues = () => ({
  username: '',
  password: '',
});

export const getValidationSchema = isEditMode =>
  Yup.object().shape({
    username: Yup.string().strict(true).required('Required field'),
    password: Yup.string().strict(true).required('Required field'),
  });
