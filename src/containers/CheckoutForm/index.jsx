/* eslint-disable react/prop-types */
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';

import CheckoutForm from '../../components/Stripe/CheckoutForm'; // Importe o CheckoutForm
import stripePromise from '../../utils/stripeConfig';

export function CheckoutPage() {
  const location = useLocation();
  const clientSecret = location.state?.clientSecret; // Pegando o clientSecret da navegação

  // Verifica se o clientSecret está disponível
  if (!clientSecret) {
    return <div>Erro: clientSecret não encontrado.</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
