import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import InventoryTable from '@/app/shared/inventory/inventory-list/table';
import { productsData } from '@/data/products-data';
import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';
import NumberOfInventory from '@/app/shared/inventory/inventory-cards/numberofinventory';
import TotalRevenue from '@/app/shared/inventory/inventory-cards/totalrevenue';
import InventoryCards from '@/app/shared/inventory/inventory-cards/inventorycards';
export const metadata = {
  ...metaObject('Inventory'),
};

const pageHeader = {
  title: 'Inventory',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.inventory.inventory,
      name: 'Inventory',
    },
    {
      name: 'List',
    },
  ],
};

export default function InventoryPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>

      {/* <div className='my-2 middle lg:w-[80%] xl:w-[60%] flex flex-col lg:flex-row gap-6 justify-center'>
      <TotalRevenue/>
      <NumberOfInventory/>
    </div> */}


        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={productsData}
            fileName="invenotry_data"
            header="ID,Name,Category,Inventory Thumbnail,SKU,Stock,Price,Status,Rating"
          />
          <Link
            href={routes.inventory.createInventory}
            className="w-full @lg:w-auto"
          >
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Inventory
            </Button>
          </Link>
        </div>
      </PageHeader>
      <div className='mb-5'>
     <InventoryCards/>
     </div>

      <InventoryTable data={productsData} />
    </>
  );
}
