import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import { Table } from '../Table';
import { ButtonGroup, EmptyCart, ProductImage } from './styles';

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Item</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{formatCurrency(product.price)}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => decreaseProducts(product.id)}>
                    -
                  </button>
                  {product.quantity}
                  <button onClick={() => increaseProducts(product.id)}>
                    +
                  </button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                {formatCurrency(product.quantity * product.price)}
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <EmptyCart>Carrinho vazio</EmptyCart>
        )}
      </Table.Body>
    </Table.Root>
  );
}
