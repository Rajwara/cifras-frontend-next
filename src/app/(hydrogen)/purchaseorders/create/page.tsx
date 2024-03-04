import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import CreateEditPurchaseOrderDetails from '@/app/shared/purchaseorders/create-edit';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';

export const metadata = {
  ...metaObject('Create Purchase Order'),
};

const pageHeader = {
  title: 'Create Purchase Order',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.purchaseorders.purchaseorders,
      name: 'Purchase Order',
    },
    {
      name: 'Create',
    },
  ],
};

export default function CreatePurchaseOrderPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.purchaseorders.createPurchaseOrder}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button as="span" className="w-full @lg:w-auto">
            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
            Add Purchase Order
          </Button>
        </Link>
      </PageHeader>

      <CreateEditPurchaseOrderDetails />
    </>
  );
}
