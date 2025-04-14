'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import { setUserData } from '@/store/userSlice';
import { Button } from '@/components/Button';

import {
  FormWrapper,
  FormTitle,
  Input,
  FormField,
  ErrorMessage,
} from './RegisterForm.styles';


const schema = z.object({
  firstName: z.string().min(2, 'Nome é obrigatório'),
  lastName: z.string().min(2, 'Sobrenome é obrigatório'),
  country: z.string().min(2, 'País é obrigatório'),
  email: z.string().email('E-mail inválido'),
});

type FormData = z.infer<typeof schema>;

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    dispatch(setUserData(data));
    router.push('/');
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Cadastro</FormTitle>

      <FormField>
        <Input placeholder="Nome" {...register('firstName')} />
        {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
      </FormField>

      <FormField>
        <Input placeholder="Sobrenome" {...register('lastName')} />
        {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
      </FormField>

      <FormField>
        <Input placeholder="País" {...register('country')} />
        {errors.country && <ErrorMessage>{errors.country.message}</ErrorMessage>}
      </FormField>

      <FormField>
        <Input placeholder="E-mail" {...register('email')} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormField>

      <Button variant='secondary' type="submit">Cadastrar</Button>
    </FormWrapper>
  );
};
