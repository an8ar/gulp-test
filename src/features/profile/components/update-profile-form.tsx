import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { FormProvider } from '~/components/hook-form/form-provider';
import { RHFTextField } from '~/components/hook-form/rhf-text-field';
import { LoadingButton } from '~/components/ui/loading-button';

type FormValuesProps = {
  email: string;
  surname: string;
  name: string;
  address: string;
  phoneNumber: string;
  username: string;
  password: string;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  address: Yup.string().required('Address is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const defaultValues = {
  email: '',
  name: '',
  surname: '',
  address: '',
  phoneNumber: '',
  username: '',
  password: '',
};

export function UpdateProfileForm() {
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const {
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
      // const res = await login(data).unwrap();
      // console.log(res);
    } catch (error) {
      console.log(error);
      setError('email', { message: 'Email is not valid', type: 'custom' });
      setError('password', { message: 'Wrong credentials', type: 'custom' });
    }
  };
  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-3 gap-14 grid-cols-1 ">
          <RHFTextField name="name" label="Name" labelStyle="text-white" />

          <RHFTextField name="surname" label="Surname" labelStyle="text-white" />
          <RHFTextField name="email" label="Email" labelStyle="text-white" />
          <RHFTextField name="username" label="Login" labelStyle="text-white" />
          <RHFTextField name="phone" label="Phone" labelStyle="text-white" />
          <RHFTextField name="address" label="Address" labelStyle="text-white" />
          <RHFTextField name="password" label="Password" type="password" labelStyle="text-white" />
          <div className="flex items-end">
            <LoadingButton isLoading={isSubmitting} className="bg-lime-500 rounded-full">
              Update Profile
            </LoadingButton>
          </div>
        </div>
      </FormProvider>
    </div>
  );
}
