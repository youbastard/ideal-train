import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '@/utils/apollo-client';
import App from '@/components/app';

import '@/styles/index.css';

const client = createApolloClient();

ReactDOM.render(
  (<React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>),
  document.getElementById('root')
);
