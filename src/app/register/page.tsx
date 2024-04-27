import RegisterForm from '@/components/authentication/RegisterForm';
import * as React from 'react';

interface IRegisterPageProps {
}

const RegisterPage: React.FunctionComponent<IRegisterPageProps> = (props) => {
  return <div>
    <RegisterForm />
  </div>;
};

export default RegisterPage;
