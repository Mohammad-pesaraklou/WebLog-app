import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "react-alice-carousel/lib/alice-carousel.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom';
const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cl6l37qx40cjv01ulec452143/master",
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ApolloProvider>
);
