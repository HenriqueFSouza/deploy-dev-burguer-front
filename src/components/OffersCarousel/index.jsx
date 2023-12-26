import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import { api } from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import { CardProduct } from '../CardProduct';
import { Title, Container } from './styles';

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products');

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });

      setOffers(onlyOffers);
    }

    loadOffers();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title>OFERTAS DO DIA</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        itemClass="carousel-item"
        partialVisible={false}
      >
        {offers &&
          offers.map((offer) => <CardProduct key={offer.id} product={offer} />)}
      </Carousel>
    </Container>
  );
}
