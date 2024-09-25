import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51Q16l1RwW9OE2i0EttKMg9RfrVZBLnLM9OXYQKTujTYP48sB5dFODhDsxCMf9cuJEiqeLNfsQF5lKVUMbFiWtSbH00eEVLaqtf',
);

export default stripePromise;
