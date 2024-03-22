'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Text, Input, Password } from 'rizzui';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { routes } from '@/config/routes';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

import {
  resetPasswordSchema,
  ResetPasswordSchema,
} from '@/utils/validators/reset-password.schema';
import { supabase } from '@/utils/supabaseClient';
import { toast } from 'react-hot-toast';

const initialValues = {
  // email: '',
  password: '',
  confirmPassword: '',
};

export default function ForgetPasswordForm() {
  const router = useRouter();
  const [reset, setReset] = useState({});
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (window.location.hash) {
      setHash(window.location.hash);
    }
  }, []);

  const onSubmit: SubmitHandler<ResetPasswordSchema> = async (credentails) => {
    try {
      if (!hash) {
        return toast.error('Invalid Hash Token');
      } else if (hash) {
        const hashArray = hash
          ?.substring(1)
          .split('&')
          .map((param) => param.split('='));
        console.log('hashArray: ', hashArray);
        let type;
        let accessToken = '';
        let refreshToken = '';
        for (const [key, value] of hashArray) {
          if (key === 'type') {
            type = value;
          } else if (key === 'access_token') {
            accessToken = value;
          } else if (key === 'refresh_token') {
            refreshToken = value;
          }
        }
        if (
          type !== 'recovery' ||
          !accessToken ||
          typeof accessToken === 'object'
        ) {
          return toast.error('Invalis token');
        }

        console.log('accessToken: ', accessToken);
        console.log('type: ', type);
        /// Session Updated
        const response = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        // Update User
        const { error, data } = await supabase.auth.updateUser({
          password: credentails.password,
        });
        console.log('data: ', data);
        // router.push(routes.auth.signIn1);
        signOut({
          callbackUrl: 'http://localhost:3000/',
        });
      }
    } catch (error) {}
    // console.log('Form Submit Check point');
    // console.log(data);
    // setReset(initialValues);
    // handleForgetPassword(data.email);
  };

  const handleForgetPassword = async (email: string) => {
    router.push(routes.auth.forgotPassword2);
    // forgotPassword2
    // const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    //   redirectTo: 'http://localhost:3000/',
    // });

    // // const { data, error } = await supabase.auth.api.resetPasswordForEmail(email, {
    // //   redirectTo: 'http://localhost:3000/',
    // // });

    // if (error) {
    //   alert(error.message);
    //   console.error('Error sending password reset email:', error);
    //   return;
    // }
    // router.push(routes.auth.signIn1);
    // console.log('Password reset email sent', data);
  };

  return (
    <>
      <Form<ResetPasswordSchema>
        validationSchema={resetPasswordSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}
        className="pt-1.5"
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-6">
            {/* <Input
              type="email"
              size="lg"
              label="Email"
              placeholder="Enter your email"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('email')}
              error={errors.email?.message}
            /> */}
            <Password
              label="Password"
              placeholder="Enter your password"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('password')}
              error={errors.password?.message}
            />
            <Password
              label="Confirm Password"
              placeholder="Enter confirm password"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            <Button className="mt-2 w-full" type="submit" size="lg">
              Reset Password
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 lg:mt-8 lg:text-start xl:text-base">
        Don’t want to reset your password?{' '}
        <Link
          href={routes.auth.signIn1}
          className="font-bold text-gray-700 transition-colors hover:text-blue"
        >
          Sign In
        </Link>
      </Text>
    </>
  );
}