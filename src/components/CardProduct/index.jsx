import { ShoppingBag } from '@phosphor-icons/react';
import PropTypes from 'prop-types';

import { useCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import { Container } from './styles';

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  return (
    <Container>
      <img src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{formatCurrency(product.price)}</strong>
      </div>
      <button onClick={() => putProductInCart(product)}>
        <ShoppingBag size={24} color="#ffffff" />
      </button>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
