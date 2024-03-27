'use client';

import { useState,useEffect } from 'react';
import toast from 'react-hot-toast';
import { Element } from 'react-scroll';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Text } from 'rizzui';
import cn from '@/utils/class-names';
import FormNav, {
  formParts,
} from '@/app/shared/suppliers/create-edit/form-nav';
import ProductSummary from '@/app/shared/suppliers/create-edit/product-summary';
import { defaultValues } from '@/app/shared/suppliers/create-edit/form-utils';
import ProductMedia from '@/app/shared/suppliers/create-edit/product-media';
import PricingInventory from '@/app/shared/suppliers/create-edit/pricing-inventory';
import ProductIdentifiers from '@/app/shared/suppliers/create-edit/product-identifiers';
import ShippingInfo from '@/app/shared/suppliers/create-edit/shipping-info';
import ProductSeo from '@/app/shared/suppliers/create-edit/product-seo';
import DeliveryEvent from '@/app/shared/suppliers/create-edit/delivery-event';
import ProductVariants from '@/app/shared/suppliers/create-edit/product-variants';
import ProductTaxonomies from '@/app/shared/suppliers/create-edit/product-tags';
import FormFooter from '@/components/form-footer';
import {
  CreateSupplierInput,
  SupplierFormSchema,
} from '@/utils/validators/create-supplier.schema';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';
import DetialandHistoryTab from "../../detailsandhistorytabs/detailsandhistorytabs";
import { useMutation, gql, useQuery } from '@apollo/client';


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
  product?: CreateSupplierInput;
}

export default function CreateEditProduct({
  slug,
  product,
  className,
}: IndexProps) {
  const { layout } = useLayout();
  const [isLoading, setLoading] = useState(false);
  const methods = useForm<CreateSupplierInput>({
    resolver: zodResolver(SupplierFormSchema),
    defaultValues: defaultValues(product),
  });
// create supplier
  const CREATE_SUPPLIER = gql`
  mutation CreateSupplier($supplier: SupplierInput!){
    createSupplier(supplier: $supplier) {
        id
        name
        alias
        ruc
        dv
        phone
        email
        supplierType
    }
}

  `;

  // get supplier to edit by value
  const GET_SUPPLIER_BY_ID = gql`

  query GetSupplierById ($id: Int!){
    getSupplierById(id: $id) {
        supplier {
            id
            name
            alias
            ruc
            dv
            phone
            email
            supplierType
        }
    }
}

`;


// update supplier

  const updateSupplier = gql`

  mutation UpdateSupplier ($id: Int!, $supplier: SupplierUpdateInput!){
    updateSupplier(id: $id, supplier:  $supplier) {
        id
        name
        alias
        ruc
        dv
        phone
        email
        supplierType
    }
}

`;



const {  error, data: supplierData } = useQuery(GET_SUPPLIER_BY_ID, {
  variables: { id: Number(slug) }, 
  skip: !slug,
  
});
console.log(slug,"Slug");

  const [mutation, { loading }] = useMutation(
    slug ? updateSupplier : CREATE_SUPPLIER
  );

  useEffect(() => {
    if (supplierData && supplierData.getSupplierById) {
      methods.reset({...supplierData.getSupplierById.supplier, email: supplierData.getSupplierById.supplier.email[0], ...supplierData.getSupplierById.addresses});
    }
  }, [supplierData]);

  const onSubmit: SubmitHandler<CreateSupplierInput> =async (data) => {
   
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   console.log('product_data', data);
    //   toast.success(
    //     <Text as="b">Supplier successfully {slug ? 'updated' : 'created'}</Text>
    //   );
    //   methods.reset();
    // }, 600);

       try {
      setLoading(true);
      const variables:any = {
        supplier: {  
          name: data.name,
          alias: data.alias,
          ruc: data.ruc,
          dv: data.dv,
          phone: data.phone,
          email:data.email,
          supplierType:data.supplierType,


        
         
  
  },
      };

      if (slug) {
        // If slug is present, it means we are updating an existing client
        variables['id'] = Number(slug);
      }else{
        variables['supplier']['addresses']= {}
        variables['supplier']['addresses']['addressType']= data.addressType
        variables['supplier']['addresses']['firstStreet']= data.firstStreet
        variables['supplier']['addresses']['secondStreet']= data.secondStreet
        variables['supplier']['addresses']['province']= data.province
        variables['supplier']['addresses']['district']= data.district
        variables['supplier']['addresses']['jurisdiction']= data.jurisdiction
        variables['supplier']['addresses']['country']= data.country
        variables['supplier']['email']= data.email
      }
      console.log({variables}, "VAri");

      const res = await mutation({ variables });

      toast.success(
        <Text as="b">Client successfully {slug ? 'updated' : 'created'}</Text>
      );
      methods.reset();
      setLoading(false);
    } catch (error) {
      console.log(error, 'error');
      setLoading(false);
      toast.error(<Text as="b">Error occurred while {slug ? 'updating' : 'creating'} the Supplier</Text>);
    }
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
            submitBtnText={slug ? 'Update Supplier' : 'Create Supplier'}
          />
        </form>
      </FormProvider>
      <div className='mt-10'>
          <DetialandHistoryTab />
      </div>
    </div>
  );
}
