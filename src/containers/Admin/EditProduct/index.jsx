import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { api } from '../../../services/api';
import {
  Container,
  Form,
  InputGroup,
  Input,
  Label,
  Select,
  SubmitButton,
  LabelUpload,
  ErrorMessage,
  CheckboxGroup,
} from './styles';

export function EditProduct() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    offer: Yup.bool(),
  });

  const navigate = useNavigate();
  const {
    state: { product },
  } = useLocation();

  const { register, handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const [fileName, setFileName] = useState(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  async function onSubmit(data) {
    const productDataFormData = new FormData();

    productDataFormData.append('name', data.name);
    productDataFormData.append('price', +data.price * 100);
    productDataFormData.append('category_id', data.category.id);
    productDataFormData.append('file', data.file[0]);
    productDataFormData.append('offer', data.offer);

    await toast.promise(
      api.put(`/products/${product.id}`, productDataFormData),
      {
        pending: 'Salvando alterações...',
        success: 'Produto alterado com sucesso',
        error: 'Falha em alterar o produto',
      },
    );

    setTimeout(() => {
      navigate('/produtos');
    }, 1000);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
          />
          <ErrorMessage>{formState.errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register('price')}
            defaultValue={product.price / 100}
          />
          <ErrorMessage>{formState.errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload htmlFor="image-input">
            <Image />
            <input
              {...register('file')}
              type="file"
              id="image-input"
              accept="image/png, image/jpeg"
              onChange={(value) => {
                setFileName(value.target.files[0]?.name);
                register('file').onChange(value);
              }}
            />
            {fileName || 'Upload de imagem'}
          </LabelUpload>
          <ErrorMessage>{formState.errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            defaultValue={product.category}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                menuPortalTarget={document.body}
                placeholder="Categorias"
                defaultValue={product.category}
              />
            )}
          />
          <ErrorMessage>{formState.errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <CheckboxGroup>
          <input
            type="checkbox"
            id="is-offer"
            defaultChecked={product.offer}
            {...register('offer')}
          />
          <Label htmlFor="is-offer">Produto em oferta?</Label>
        </CheckboxGroup>

        <SubmitButton>Editar produto</SubmitButton>
      </Form>
    </Container>
  );
}
