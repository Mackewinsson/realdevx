import React from 'react';
import { Button } from 'react-bootstrap';
import FirebaseAuthService from '../../firebase/FirebaseAuthService';

const RegisterButton = ({ size }) => {
  return (
    <Button
      size={size ? 'lg' : ''}
      variant="primary"
      onClick={() => {
        (async () => {
          await FirebaseAuthService.loginUser(
            'mackewinsson@gmail.com',
            '123456'
          );
        })();
      }}
    >
      Comienza aqui
    </Button>
  );
};

export default RegisterButton;
