import LoginForm from '@/components/authentication/LoginForm';
import * as React from 'react';

interface ILoginPageProps {
}
export const metadata = {
    title: "Steps | login",
    description: "login as annyomous and leave as our guest"
}
const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    return <>
        <LoginForm />
    </>
};

export default LoginPage;
