import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';

import Cadastro from './pages/cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Petshop/>
  </React.StrictMode>
);


