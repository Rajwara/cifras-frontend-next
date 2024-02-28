import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import ClientsTable from '@/app/shared/clients/client-list/table';
import { productsData } from '@/data/products-data';
import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';

export const metadata = {
  ...metaObject('Clients'),
};

const pageHeader = {
  title: 'Clients',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.client.clients,
      name: 'Clients',
    },
    {
      name: 'List',
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={productsData}
            fileName="product_data"
            header="ID,Name,Category,Clients Thumbnail,SKU,Stock,Price,Status,Rating"
          />
          <Link
            href={routes.client.createClient}
            className="w-full @lg:w-auto"
          >
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Clients
            </Button>
          </Link>
        </div>
      </PageHeader>

      <ClientsTable data={productsData} />
    </>
  );
}
