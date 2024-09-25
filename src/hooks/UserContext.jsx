import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [dpmCheckerLink, setDpmCheckerLink] = useState('');

  const putUserData = (userInfo) => {
    setUserData(userInfo);

    localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
  };

  const logout = () => {
    setUserData({});
    localStorage.removeItem('devburger:userData');
  };

  useEffect(() => {
    const loadUserData = () => {
      const clientInfo = localStorage.getItem('devburger:userData');

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };

    loadUserData();
  }, []);

  const updateDpmCheckerLink = (link) => {
    setDpmCheckerLink(link);
  };

  return (
    <UserContext.Provider
      value={{
        putUserData,
        userData,
        logout,
        dpmCheckerLink,
        updateDpmCheckerLink,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used with UserContext');
  }

  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
