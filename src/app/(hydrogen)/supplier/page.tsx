import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import ProductsTable from '@/app/shared/suppliers/supplier-list/table';
import { supplierData } from '@/data/supplier-data';
import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';
import NumberOfSupplier from '@/app/shared/suppliers/supplier-cards/numberofsuppliers';
import TotalRevenue from '@/app/shared/suppliers/supplier-cards/totalrevenue';
import SupplierCards from '@/app/shared/suppliers/supplier-cards/suppliercards';


export const metadata = {
  ...metaObject('Suppliers'),
};

const pageHeader = {
  title: 'Suppliers',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.supplier.supplier,
      name: 'Suppliers',
    },
    {
      name: 'List',
    },
  ],
};

export default function SuppliersPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>

      {/* <div className='middle lg:w-[80%] xl:w-[60%] flex flex-col lg:flex-row gap-6 justify-center'>
      <TotalRevenue/>
      <NumberOfSupplier/>
    </div> */}


        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={supplierData}
            fileName="supplier_data"
            header="ID,Name,Category,Supplier Thumbnail,SKU,Stock,Price,Status,Rating"
          />
          <Link
            href={routes.supplier.createSupplier}
            className="w-full @lg:w-auto"
          >
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Supplier
            </Button>
          </Link>
        </div>
      </PageHeader>
      <div className='mb-5'>
        <SupplierCards/>
      </div>

      <ProductsTable data={supplierData} />
    </>
  );
}
