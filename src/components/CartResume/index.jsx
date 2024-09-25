import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate para navegação
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Container } from './styles';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);
  const [, setClientSecret] = useState('');

  const { cartProducts, clearCart } = useCart();
  const { updateDpmCheckerLink } = useUser();
  const navigate = useNavigate(); // Instancia o hook useNavigate para navegação

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const handleCheckout = async () => {
    try {
      // Cria o PaymentIntent no backend com os itens do carrinho
      const response = await api.post('/create-payment-intent', {
        items: cartProducts,
      });

      // Salva o clientSecret retornado pelo backend
      setClientSecret(response.data.clientSecret);

      // Atualiza o dpmCheckerLink no contexto
      updateDpmCheckerLink(response.data.dpmCheckerLink);

      // Limpa o carrinho e navega para a rota de checkout
      clearCart();
      navigate('/checkout', {
        state: { clientSecret: response.data.clientSecret },
      });
    } catch (error) {
      toast.error('Erro ao tentar processar o pagamento.');
      console.error(error);
    }
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>

      <Button onClick={handleCheckout}>Finalizar Pedido</Button>
    </div>
  );
}
