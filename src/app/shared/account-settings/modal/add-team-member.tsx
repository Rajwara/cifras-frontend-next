'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Controller, SubmitHandler } from 'react-hook-form';
import { useModal } from '@/app/shared/modal-views/use-modal';
import { Input, Text, Title, Button, Select } from 'rizzui';
import { Form } from '@/components/ui/form';
import {
  AddTeamMemberInput,
  addTeamMemberSchema,
} from '@/utils/validators/team-member.schema';

const role = [
  {
    label: 'Product Designer',
    value: 'product_designer',
  },
  {
    label: 'Software Engineer',
    value: 'software_engineer',
  },
];

const countries = [
  {
    label: 'United States',
    value: 'usa',
  },
  {
    label: 'Bangladesh',
    value: 'bd',
  },
];

const teams = [
  {
    label: 'Design',
    value: 'design',
  },
  {
    label: 'Human Resource',
    value: 'human_resource',
  },
  {
    label: 'Operations',
    value: 'operations',
  },
  {
    label: 'Finance',
    value: 'finance',
  },
  {
    label: 'Product',
    value: 'product',
  },
];

export default function AddTeamMemberModalView() {
  const { closeModal } = useModal();
  const [reset, setReset] = useState({});
  const [isLoading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<AddTeamMemberInput> = (data) => {
    toast.success(
      <Text as="b" className="font-semibold">
        Team member successfully added!
      </Text>
    );
    // set timeout ony required to display loading state of the create product button
    setLoading(true);
    closeModal();
    setTimeout(() => {
      setLoading(false);
      console.log(' data ->', data);
      setReset({
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        country: '',
      });
    }, 600);
  };

  return (
    <div className="m-auto p-6">
      <Title as="h3" className="mb-6 text-lg">
        Add New Member
      </Title>
      <Form<AddTeamMemberInput>
        validationSchema={addTeamMemberSchema}
        resetValues={reset}
        onSubmit={onSubmit}
      >
        {({ register, control, formState: { errors } }) => (
          <>
            <MemberForm control={control} register={register} errors={errors} />
            <div className="mt-8 flex justify-end gap-3">
              <Button
                className="w-auto"
                variant="outline"
                onClick={() => closeModal()}
              >
                Cancel
              </Button>
              <Button type="submit" isLoading={isLoading} className="w-auto">
                Add Member
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}

export function MemberForm({ register, control, errors }: any) {
  return (
    <div className="flex flex-col gap-4 text-gray-700">
      <div className="flex flex-col gap-4 xs:flex-row xs:items-center">
        <Input
          type="text"
          label="First Name"
          placeholder="John"
          labelClassName="text-sm font-medium text-gray-900"
          {...register('first_name')}
          error={errors?.first_name?.message}
          className="flex-grow"
        />
        <Input
          type="text"
          label="Last Name"
          placeholder="Doe"
          labelClassName="text-sm font-medium text-gray-900"
          {...register('last_name')}
          error={errors?.last_name?.message}
          className="flex-grow"
        />
      </div>
      <Input
        type="email"
        label="Email"
        labelClassName="text-sm font-medium text-gray-900"
        placeholder="john@doe.io"
        {...register('email')}
        error={errors.email?.message}
      />
      <Controller
        control={control}
        name="role"
        render={({ field: { value, onChange } }) => (
          <Select
            label="Role"
            inPortal={false}
            labelClassName="text-sm font-medium text-gray-900"
            // @ts-ignore
            placeholder={role[0].name}
            options={role}
            onChange={onChange}
            value={value}
            getOptionValue={(option) => option.value}
            displayValue={(selected) =>
              role?.find((r) => r.value === selected)?.label ?? ''
            }
            error={errors?.role?.message as string}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field: { onChange, value } }) => (
          <Select
            label="Country"
            inPortal={false}
            labelClassName="text-sm font-medium text-gray-900"
            // @ts-ignore
            placeholder={countries[0].name}
            options={countries}
            onChange={onChange}
            value={value}
            getOptionValue={(option) => option.value}
            displayValue={(selected) =>
              countries?.find((con) => con.value === selected)?.label ?? ''
            }
            error={errors?.country?.message as string}
          />
        )}
      />
      <Controller
        control={control}
        name="teams"
        render={({ field: { value, onChange } }) => (
          <Select
            label="Assign to Team"
            labelClassName="text-sm font-medium text-gray-900"
            placeholder="Select a team"
            inPortal={false}
            options={teams}
            onChange={onChange}
            value={value}
            getOptionValue={(option) => option.value}
            displayValue={(selected) =>
              teams?.find((t) => t.value === selected)?.label ?? ''
            }
            error={errors?.teams?.message as string}
          />
        )}
      />
    </div>
  );
}
