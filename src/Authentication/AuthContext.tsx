import React, { useState } from 'react';

export interface IAuthContext {
    signup_state: {
        step: number,
        name: string,
        email: string,
        password: string,
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
    },
    setSignUpState: Function,
    signin_state: {
        email: '',
        password: '',
    },
    setSignInState: () => null,
});

