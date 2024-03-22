'use client';

import { Input, Text, Button } from 'rizzui';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { useState } from 'react';
import { routes } from '@/config/routes';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useMedia } from '@/hooks/use-media';
import { useRouter } from 'next/navigation';
import {
  forgetPasswordSchema,
  ForgetPasswordSchema,
} from '@/utils/validators/forget-password.schema';
import { supabase } from '@/utils/supabaseClient';

const initialValues = {
  email: '',
};

export default function ForgetPasswordForm() {
  const router = useRouter();
  const isMedium = useMedia('(max-width: 1200px)', false);
  const [reset, setReset] = useState({});
  const handleForgetPassword = async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `http://localhost:3000/${routes.auth.forgotPassword1}`,
    });

    if (error) {
      alert(error.message);
      console.error('Error sending password reset email:', error);
      return;
    }
    toast.success(
      <Text>
        Reset link sent to this email:{' '}
        <Text as="b" className="font-semibold">
          {email}
        </Text>
      </Text>
    );
    setReset(initialValues);
    setTimeout(() => {
      router.push(routes.auth.signIn1);
    }, 3000);
    console.log('Password reset email sent', data);
  };
  const onSubmit: SubmitHandler<ForgetPasswordSchema> = (data) => {
    console.log('Forgot password form data->', data);
    handleForgetPassword(data.email);
    // toast.success(
    //   <Text>
    //     Reset link sent to this email:{' '}
    //     <Text as="b" className="font-semibold">
    //       {data.email}
    //     </Text>
    //   </Text>
    // );
    // setReset(initialValues);
  };

  return (
    <>
      <Form<ForgetPasswordSchema>
        validationSchema={forgetPasswordSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            <Input
              type="email"
              size={isMedium ? 'lg' : 'xl'}
              label="Email"
              placeholder="Enter your email"
              rounded="pill"
              className="[&>label>span]:font-medium"
              {...register('email')}
              error={errors.email?.message as string}
            />
            <Button
              className="border-primary-light w-full border-2 text-base font-medium"
              type="submit"
              size={isMedium ? 'lg' : 'xl'}
              rounded="pill"
            >
              Reset Password
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 lg:text-start xl:mt-7 xl:text-base">
        Don’t want to reset?{' '}
        <Link
          href={routes.auth.signIn1}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          Sign In
        </Link>
      </Text>
    </>
  );
}