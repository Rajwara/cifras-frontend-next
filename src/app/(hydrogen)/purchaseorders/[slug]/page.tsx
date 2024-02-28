import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import PurchaseOrderDetails from '@/app/shared/purchaseorders/product-details';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Product Details'),
};

export default function PurchaseOrderDetailsPage({ params }: any) {
  const pageHeader = {
    title: 'Purchase Order Details',
    breadcrumb: [
      {
        href: routes.eCommerce.dashboard,
        name: 'E-Commerce',
      },
      {
        href: routes.eCommerce.shop,
        name: 'Shop',
      },
      {
        name: params.slug,
      },
    ],
  };
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <PurchaseOrderDetails />
    </>
  );
}
