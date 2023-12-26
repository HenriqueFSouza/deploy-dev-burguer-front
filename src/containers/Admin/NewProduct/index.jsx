import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
} from './styles';

export function NewProduct() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', (value) => {
        return value && value.length > 0;
      })
      .test('fileSize', 'Carregue arquivos até 5mb', (value) => {
        return value.length && value[0].size <= 50000;
      })
      .test('type', 'Carregue apenas arquivos JPEG/PNG', (value) => {
        return (
          value.length &&
          (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
        );
      }),
  });

  const navigate = useNavigate();

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

    await toast.promise(api.post('/products', productDataFormData), {
      pending: 'Adicionando produto...',
      success: 'Produto criado com sucesso',
      error: 'Falha ao criar o produto',
    });

    setTimeout(() => {
      navigate('/produtos');
    }, 1000);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{formState.errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
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
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                menuPortalTarget={document.body}
                placeholder="Categorias"
              />
            )}
          />
          <ErrorMessage>{formState.errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <SubmitButton>Adicionar produto</SubmitButton>
      </Form>
    </Container>
  );
}
