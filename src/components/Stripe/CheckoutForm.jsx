/* eslint-disable react/prop-types */
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { cartProducts, clearCart } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe.js ou Elements ainda não carregados');
      return;
    }

    try {
      setIsLoading(true);

      // Confirmar o pagamento com Stripe e capturar o clientSecret
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required', // Evitar redirecionamento automático
      });

      if (error) {
        setMessage(error.message);
        setIsLoading(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        const order = cartProducts.map((product) => {
          return { id: product.id, quantity: product.quantity };
        });

        try {
          // Criar o pedido no backend
          await api.post('/orders', { products: order });

          clearCart();
          toast.success('Pedido realizado com sucesso');

          // Usar o clientSecret do Stripe para redirecionar à página de sucesso
          navigate(
            `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
            {
              state: { paymentIntentId: paymentIntent.id },
            },
          );
        } catch (error) {
          toast.error('Falha ao tentar realizar o seu pedido, tente novamente');
          setIsLoading(false);
        }
      } else {
        setMessage('Ocorreu um erro inesperado.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <div id="form-container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Pague agora'
            )}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
