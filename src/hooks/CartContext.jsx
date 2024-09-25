import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateLocalStorage = (products) => {
    localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
  };

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newCartProducts = [];
    if (cartIndex >= 0) {
      newCartProducts = cartProducts;

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1;
      setCartProducts(newCartProducts);
      toast.success('Produto adicionado com sucesso');
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
      toast.success('Produto adicionado com sucesso');
    }

    updateLocalStorage(newCartProducts);
  };

  const clearCart = () => {
    setCartProducts([]);

    updateLocalStorage([]);
  };

  const deleteProducts = (productId) => {
    const newCart = cartProducts.filter((product) => product.id !== productId);

    setCartProducts(newCart);

    updateLocalStorage(newCart);
  };

  const increaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });

    setCartProducts(newCart);

    updateLocalStorage(newCart);
  };

  const decreaseProducts = async (productId) => {
    const cartIndex = cartProducts.findIndex((pd) => pd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });

      setCartProducts(newCart);

      updateLocalStorage(newCart);
    } else {
      deleteProducts(productId);
    }
  };

  useEffect(() => {
    const loadUserData = () => {
      const clientCartData = localStorage.getItem('devburger:cartInfo');

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };

    loadUserData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with UserContext');
  }

  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
