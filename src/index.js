import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'
import Checkout from './pages/checkout';

import Cadastro from './pages/cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Checkout/>
  </React.StrictMode>
);


