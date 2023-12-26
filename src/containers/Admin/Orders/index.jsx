import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { api } from '../../../services/api';
import { orderStatusOptions } from './orderStatus';
import { Row } from './row';
import { Container, Filter, FilterOption } from './styles';

export function Orders() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);

  const queryParams = new URLSearchParams(search);

  const [activeStatus, setActiveStatus] = useState(() => {
    const statusId = +queryParams.get('statusId');

    if (statusId) {
      return statusId;
    }

    return 0;
  });

  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders');

      setOrders(data);
      setFilteredOrders(data);
    }

    loadOrders();
  }, []);

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = orderStatusOptions.findIndex(
        (item) => item.id === activeStatus,
      );

      const newFilteredOrders = orders.filter(
        (order) => order.status === orderStatusOptions[statusIndex].value,
      );

      setFilteredOrders(newFilteredOrders);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);

      setFilteredOrders(newOrders);
    }

    setActiveStatus(status.id);

    navigate(
      {
        pathname: '/pedidos',
        search: `?statusId=${status.id}`,
      },
      { replace: true },
    );
  }

  return (
    <Container>
      <Filter>
        {orderStatusOptions?.length &&
          orderStatusOptions.map((item) => (
            <FilterOption
              key={item.id}
              $isActiveFilter={item.id === activeStatus}
              onClick={() => handleStatus(item)}
            >
              {item.label}
            </FilterOption>
          ))}
      </Filter>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
