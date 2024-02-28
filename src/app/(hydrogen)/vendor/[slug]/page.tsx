import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import VendorDetails from '@/app/shared/vendors/product-details';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Vendor Details'),
};

export default function VendorDetailsPage({ params }: any) {
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
      <VendorDetails />
    </>
  );
}
