import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import VendorTable from '@/app/shared/vendors/vendor-list/table';
import { vendorData } from '@/data/vendor-data';
import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';
import NumberOfVendors from '@/app/shared/vendors/vendor-cards/numberofvendors';
import TotalRevenue from '@/app/shared/vendors/vendor-cards/totalrevenue';


export const metadata = {
  ...metaObject('Vendors'),
};

const pageHeader = {
  title: 'Vendors',
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
      name: 'List',
    },
  ],
};

export default function VendorPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
      <div className='middle lg:w-[80%] xl:w-[60%] flex flex-col lg:flex-row gap-6 justify-center'>
      <TotalRevenue/>
      <NumberOfVendors/>
    </div>

        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={vendorData}
            fileName="vendor_data"
            header="ID,Name,Category,Vendor Thumbnail,SKU,Stock,Price,Status,Rating"
          />
          <Link
            href={routes.supplier.createSupplier}
            className="w-full @lg:w-auto"
          >
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Vendor
            </Button>
          </Link>
        </div>
      </PageHeader>

      <VendorTable data={vendorData} />
    </>
  );
}
