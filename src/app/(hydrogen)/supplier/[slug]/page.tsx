import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import SupplierDetails from '@/app/shared/suppliers/product-details';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Supplier Details'),
};

export default function SupplierDetailsPage({ params }: any) {
  const pageHeader = {
    title: 'Shop',
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
      <SupplierDetails />
    </>
  );
}
