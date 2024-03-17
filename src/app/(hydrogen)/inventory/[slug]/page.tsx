import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import InventoryDetails from '@/app/shared/inventory/product-details';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('inventory Details'),
};

export default function ProductDetailsPage({ params }: any) {
  const pageHeader = {
    title: 'inventory',
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
      <InventoryDetails />
    </>
  );
}
