import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import QuoteDetails from '@/app/shared/quotes/product-details';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Quote Details'),
};

export default function QuoteDetailsPage({ params }: any) {
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
      <QuoteDetails />
    </>
  );
}
