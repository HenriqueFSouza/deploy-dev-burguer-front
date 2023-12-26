import PropTypes from 'prop-types';

import { SideNavAdmin } from '../../components';
import { EditProduct } from './EditProduct';
import { NewProduct } from './NewProduct';
import { Orders } from './Orders';
import { Products } from './Products';
import { Container } from './styles';

export function Admin({ path }) {
  return (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          {path === '/pedidos' && <Orders />}
          {path === '/produtos' && <Products />}
          {path === '/produtos/novo' && <NewProduct />}
          {path === '/produtos/editar' && <EditProduct />}
        </section>
      </main>
    </Container>
  );
}

Admin.propTypes = {
  path: PropTypes.string,
};
