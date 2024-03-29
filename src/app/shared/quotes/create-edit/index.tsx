'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Element } from 'react-scroll';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Text } from 'rizzui';
import cn from '@/utils/class-names';
import FormNav, {
  formParts,
} from '@/app/shared/quotes/create-edit/form-nav';
import ProductSummary from '@/app/shared/quotes/create-edit/product-summary';
import { defaultValues } from '@/app/shared/quotes/create-edit/form-utils';
import ProductMedia from '@/app/shared/quotes/create-edit/product-media';
import PricingInventory from '@/app/shared/quotes/create-edit/pricing-inventory';
import ProductIdentifiers from '@/app/shared/quotes/create-edit/product-identifiers';
import ShippingInfo from '@/app/shared/quotes/create-edit/shipping-info';
import ProductSeo from '@/app/shared/quotes/create-edit/product-seo';
import DeliveryEvent from '@/app/shared/quotes/create-edit/delivery-event';
import ProductVariants from '@/app/shared/quotes/create-edit/product-variants';
import ProductTaxonomies from '@/app/shared/quotes/create-edit/product-tags';
import FormFooter from '@/components/form-footer';
import {
  CreateQuoteInput,
  quoteFormSchema,
} from '@/utils/validators/create-quote.schema';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';
import DetialandHistoryTab from "../../detailsandhistorytabs/detailsandhistorytabs";


const MAP_STEP_TO_COMPONENT = {
  [formParts.summary]: ProductSummary,
  // [formParts.media]: ProductMedia,
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
  quote?: CreateQuoteInput;
}

export default function CreateEditProduct({
  slug,
  quote,
  className,
}: IndexProps) {
  const { layout } = useLayout();
  const [isLoading, setLoading] = useState(false);
  const methods = useForm<CreateQuoteInput>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: defaultValues(quote),
  });

  const onSubmit: SubmitHandler<CreateQuoteInput> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Quote_data', data);
      toast.success(
        <Text as="b">Quote successfully {slug ? 'updated' : 'created'}</Text>
      );
      methods.reset();
    }, 600);
  };

  return (
    <div className="@container">
      <FormNav
        className={cn(
          // layout === LAYOUT_OPTIONS.BERYLLIUM && 'z-[999] 2xl:top-[72px]'
        )}
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
            submitBtnText={slug ? 'Update Quote' : 'Create Quote'}
          />
        </form>
      </FormProvider>
      <div className='mt-10'>
          <DetialandHistoryTab />
      </div>
    </div>
  );
}
