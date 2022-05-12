import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';

import { Provider } from './context';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider>
        <Auth0Provider
          clientId="3BEa9ZFvGMJXp0mtOM0LWClL9f3tMcci"
          domain="dev-016e89g0.us.auth0.com"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
