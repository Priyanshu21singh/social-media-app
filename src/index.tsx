import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import { initialState, reducer } from './reducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<Auth0Provider
    domain="dev-b7awpzd4egadgg1v.us.auth0.com"
    clientId="Pbr4WKML7kJSbv9XaMIHyg2sBohJmjU5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </Auth0Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
