import { List, ListPlus, Receipt } from '@phosphor-icons/react';

export const navLinks = [
  {
    id: 1,
    label: 'Pedidos',
    path: '/pedidos',
    icon: <Receipt />,
  },
  {
    id: 2,
    label: 'Produtos',
    path: '/produtos',
    icon: <List />,
  },
  {
    id: 3,
    label: 'Adicionar Produto',
    path: '/produtos/novo',
    icon: <ListPlus />,
  },
];
