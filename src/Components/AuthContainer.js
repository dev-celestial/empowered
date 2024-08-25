import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const AuthContainer = () => {
  const [page, setPage] = useState('login');

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      {page === 'login' ? (
        <LoginPage onChangePage={handleChangePage} />
      ) : (
        <RegisterPage onChangePage={handleChangePage} />
      )}
    </div>
  );
};

export default AuthContainer;
