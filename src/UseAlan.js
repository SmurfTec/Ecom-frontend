import { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router';

import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey =
  'b33bba420c577a27b2814dff9109847e2e956eca572e1d8b807a3e2338fdd0dc/stage';

const COMMANDS = {
  OPEN_CART: 'open-cart',
  CLOSE_CART: 'close-cart',
  LOGIN_PAGE: 'login-page',
  HOME_PAGE: 'home-page',
};

const UseAlan = ({ history }) => {
  const [alanInstance, setAlanInstance] = useState();

  const opencart = useCallback(() => {
    alanInstance.playText(' opening cart ');
    history.push('/cart');
  }, [alanInstance,history]);

  const closecart = useCallback(() => {
    alanInstance.playText(' closing cart ');
    history.push('/');
  }, [alanInstance,history]);

  const loginPage = useCallback(() => {
    alanInstance.playText(' please login ');
    history.push('/login');
  }, [alanInstance, history]);

  const homePage = useCallback(() => {
    alanInstance.playText(' going to home page ');
    history.push('/');
  }, [alanInstance,history]);

  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_CART, opencart);
    window.addEventListener(COMMANDS.CLOSE_CART, closecart);
    window.addEventListener(COMMANDS.LOGIN_PAGE, loginPage);
    window.addEventListener(COMMANDS.HOME_PAGE, homePage);

    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, opencart);
      window.removeEventListener(COMMANDS.CLOSE_CART, closecart);
      window.removeEventListener(COMMANDS.LOGIN_PAGE, loginPage);
      window.removeEventListener(COMMANDS.HOME_PAGE, homePage);
    };
  }, [opencart, closecart, homePage, loginPage]);

  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        key: alanKey,
        onCommand: ({ command }) => {
          window.dispatchEvent(new CustomEvent(command));
        },
      })
    );
  }, []);

  return null;
};

export default withRouter(UseAlan);
