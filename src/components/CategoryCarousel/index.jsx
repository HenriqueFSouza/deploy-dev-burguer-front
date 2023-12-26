import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import { api } from '../../services/api';
import { ContainerItems, Button, Title, Container } from './styles';

export function CategoryCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
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
      <Title>CATEGORIAS</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        itemClass="carousel-item"
        partialVisible={false}
      >
        {categories &&
          categories.map((category) => (
            <ContainerItems key={category.id} $url={category.url}>
              <Button
                to={{
                  pathname: '/cardapio',
                  search: `?categoryId=${category.id}`,
                }}
              >
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}
