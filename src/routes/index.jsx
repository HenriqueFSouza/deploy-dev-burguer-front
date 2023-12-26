import { createBrowserRouter } from 'react-router-dom';

import { Login, Admin, Cart, Home, Menu, Register } from '../containers';
import { PrivateRoute } from './privateRoute';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/',
    element: <PrivateRoute component={<Home />} />,
  },
  {
    path: '/cardapio',
    element: <PrivateRoute component={<Menu />} />,
  },
  {
    path: '/carrinho',
    element: <PrivateRoute component={<Cart />} />,
  },
  {
    path: '/pedidos',
    element: <PrivateRoute component={<Admin path="/pedidos" />} isAdmin />,
  },
  {
    path: '/produtos',
    element: <PrivateRoute component={<Admin path="/produtos" />} isAdmin />,
  },
  {
    path: '/produtos/novo',
    element: (
      <PrivateRoute component={<Admin path="/produtos/novo" />} isAdmin />
    ),
  },
  {
    path: '/produtos/editar',
    element: (
      <PrivateRoute component={<Admin path="/produtos/editar" />} isAdmin />
    ),
  },
]);
