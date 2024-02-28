import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import CreateEditInventory from '@/app/shared/inventory/create-edit';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';

export const metadata = {
  ...metaObject('Create Inventory'),
};

const pageHeader = {
  title: 'Create Inventory',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.inventory.inventory,
      name: 'inventory',
    },
    {
      name: 'Create',
    },
  ],
};

export default function CreateProductPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.inventory.createInventory}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button as="span" className="w-full @lg:w-auto">
            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
            Add inventory
          </Button>
        </Link>
      </PageHeader>

      <CreateEditInventory />
    </>
  );
}
