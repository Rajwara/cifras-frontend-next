'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Element } from 'react-scroll';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Text } from 'rizzui';
import cn from '@/utils/class-names';
import FormNav, { formParts } from '@/app/shared/clients/create-edit/form-nav';
import ClientSummary from '@/app/shared/clients/create-edit/product-summary';
import { defaultValues } from '@/app/shared/clients/create-edit/form-utils';
import ClientMedia from '@/app/shared/clients/create-edit/product-media';
import PricingInventory from '@/app/shared/clients/create-edit/pricing-inventory';
import ClientIdentifiers from '@/app/shared/clients/create-edit/product-identifiers';
import ShippingInfo from '@/app/shared/clients/create-edit/shipping-info';
import ProductSeo from '@/app/shared/clients/create-edit/product-seo';
import DeliveryEvent from '@/app/shared/clients/create-edit/delivery-event';
import ProductVariants from '@/app/shared/clients/create-edit/product-variants';
import ProductTaxonomies from '@/app/shared/clients/create-edit/product-tags';
import FormFooter from '@/components/form-footer';
import {
  CreateClientInput,
  clientFormSchema,
} from '@/utils/validators/create-client.schema';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';
import DetialandHistoryTab from '../../detailsandhistorytabs/detailsandhistorytabs';
import { useMutation, gql } from '@apollo/client';

const MAP_STEP_TO_COMPONENT = {
  [formParts.summary]: ClientSummary,
  [formParts.media]: ClientMedia,
  // [formParts.pricingInventory]: PricingInventory,
  // [formParts.productIdentifiers]: ProductIdentifiers,
  // [formParts.shipping]: ShippingInfo,
  // [formParts.seo]: ProductSeo,
  // [formParts.deliveryEvent]: DeliveryEvent,
  // [formParts.variantOptions]: ProductVariants,
  // [formParts.tagsAndCategory]: ProductTaxonomies,
};

interface IndexProps {
  slug?: string;
  className?: string;
  client?: CreateClientInput;
}

export default function CreateEditProduct({
  slug,
  client,
  className,
}: IndexProps) {
  const { layout } = useLayout();
  const [isLoading, setLoading] = useState(false);
  const methods = useForm<CreateClientInput>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: defaultValues(client),
  });

  const updateClient = gql
  ` mutation UpdateClient {
    updateClient(client: null, id: null) {
        id
        name
        emails
        alias
        ruc
        dv
        phone
        receptorFeType
        contributorType
        imageUrl
    }
}
`

  const CREATE_CLIENT = gql`
    mutation CreateClient($client: ClientInput!) {
      createClient(client: $client) {
        id
        name
      }
    }
  `;

  const [addClient, { loading }] = useMutation(CREATE_CLIENT);

  const onSubmit: SubmitHandler<CreateClientInput> = async (data) => {
    console.log(data,"datagg");
    try {
      setLoading(true);
  const res = await addClient({ variables: { client: {  
      name: data.name,
      alias: data.alias,
      ruc: data.ruc,
      dv: data.dv,
      emails: data.email,
      phone: data.phone,
      addresses: {
        addressType: data.addressType,
        firstStreet: data.firstStreet,
        secondStreet: data.secondStreet,
        province: data.province,
        district: data.district,
        jurisdiction: data.jurisdiction,
        country: data.country,
    },
    receptorFeType: data.receptorFeType,
    contributorType: data.contributorType,
    imageUrl: data.images
    ? data.images
    : 'https://via.placeholder.com/150', // Default placeholder image


  } } });

  toast.success(
    <Text as="b">Clients successfully {slug ? 'updated' : 'created'}</Text>
  );
  methods.reset();
  setLoading(false);
    } catch (error) {
      console.log(error,"error");
      setLoading(false);
      toast.error(
        <Text as="b">Clients give the errors  </Text>
      );
    }
    // console.log('calling');
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   console.log('Clients', data);
    //   toast.success(
    //     <Text as="b">Clients successfully {slug ? 'updated' : 'created'}</Text>
    //   );
    //   methods.reset();
    // }, 600);
  };

  return (
    <div className="@container">
      <FormNav
        className={
          cn()
          // layout === LAYOUT_OPTIONS.BERYLLIUM && 'z-[999] 2xl:top-[72px]'
        }
      />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={cn(
            'relative z-[19] [&_label.block>span]:font-medium',
            className
          )}
        >
          <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
            {Object.entries(MAP_STEP_TO_COMPONENT).map(([key, Component]) => (
              <Element
                key={key}
                name={formParts[key as keyof typeof formParts]}
              >
                {<Component className="pt-7 @2xl:pt-9 @3xl:pt-11" />}
              </Element>
            ))}
          </div>

          <FormFooter
            isLoading={isLoading}
            submitBtnText={slug ? 'Update Clients' : 'Create Client'}
          />
        </form>
      </FormProvider>
      <div className="mt-10">
        <DetialandHistoryTab />
      </div>
    </div>
  );
}
