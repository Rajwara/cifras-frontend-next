import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import SupplierEditProduct from '@/app/shared/suppliers/create-edit';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';

export const metadata = {
  ...metaObject('Create Supplier'),
};

const pageHeader = {
  title: 'Create Supplier',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.supplier.supplier,
      name: 'Suppliers',
    },
    {
      name: 'Create',
    },
  ],
};

export default function CreateSupplierPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.supplier.createSupplier}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button as="span" className="w-full @lg:w-auto">
            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
            Add Supplier
          </Button>
        </Link>
      </PageHeader>

      <SupplierEditProduct />
    </>
  );
}
