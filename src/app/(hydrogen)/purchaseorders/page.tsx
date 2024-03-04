import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import PurchaseOrderTable from '@/app/shared/purchaseorders/purchaseorders-list/table';
import { purchaseorderData } from '@/data/purchaseorder-data';
import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';

export const metadata = {
  ...metaObject('Purchase Order'),
};

const pageHeader = {
  title: 'Purchase Order',
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
      name: 'List',
    },
  ],
};

export default function PurchaseOrderPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={purchaseorderData}
            fileName="product_data"
            header="ID,Name,Category,Purchase Order Thumbnail,SKU,Stock,Price,Status,Rating"
          />
          <Link
            href={routes.purchaseorders.createPurchaseOrder}
            className="w-full @lg:w-auto"
          >
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Purchase Order
            </Button>
          </Link>
        </div>
      </PageHeader>

      <PurchaseOrderTable data={purchaseorderData} />
    </>
  );
}
