import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import VendorEdit from '@/app/shared/vendors/create-edit';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/page-header';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';

export const metadata = {
  ...metaObject('Create Vendor'),
};

const pageHeader = {
  title: 'Create Vendor',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.vendor.vendor,
      name: 'Vendors',
    },
    {
      name: 'Create',
    },
  ],
};

export default function CreateVendorPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.vendor.createVendor}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button as="span" className="w-full @lg:w-auto">
            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
            Add Vendor
          </Button>
        </Link>
      </PageHeader>

      <VendorEdit />
    </>
  );
}
