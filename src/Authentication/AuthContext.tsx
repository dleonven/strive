import React, { useState } from 'react';

export interface IAuthContext {
    signup_state: {
        step: number,
        name: string,
        email: string,
        password: string,
        show_name_validation: boolean,
        show_email_validation: boolean,
        show_password_validation: boolean,
    },
    setSignUpState: Function,
    signin_state: {
        email: string,
        password: string
    },
    setSignInState: Function
}

/* https://stackoverflow.com/questions/57945481/how-to-declare-the-typescript-types-of-a-react-context-initial-state */
export const AuthContext = React.createContext<IAuthContext>({
    signup_state: {
        step: 1,
        name: '',
        email: '',
        password: '',
        show_name_validation: false,
        show_email_validation: false,
        show_password_validation: false,
    },
    setSignUpState: Function,
    signin_state: {
        email: '',
        password: '',
    },
    setSignInState: () => null,
});

