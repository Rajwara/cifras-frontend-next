import Link from 'next/link';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import InvoiceTable from '@/app/shared/invoice/invoice-list/table';
import { PiPlusBold } from 'react-icons/pi';
import { invoiceData } from '@/data/invoice-data';
import ExportButton from '@/app/shared/export-button';
import { metaObject } from '@/config/site.config';
import NumberOfInvoicess from '@/app/shared/invoice/invoice-cards/numberofinvoicess';
import TotalRevenue from '@/app/shared/invoice/invoice-cards/totalrevenue';
import InvoiceCards from  '@/app/shared/invoice/invoice-cards/invoicecards';
export const metadata = {
  ...metaObject('Invoices'),
};

const pageHeader = {
  title: 'Invoice List',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      href: routes.invoice.home,
      name: 'Invoice',
    },
    {
      name: 'List',
    },
  ],
};

export default function InvoiceListPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>

      {/* <div className='my-2 middle lg:w-[80%] xl:w-[60%] flex flex-col lg:flex-row gap-6 justify-center'>
      <TotalRevenue/>
      <NumberOfInvoicess/>
    </div> */}

        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={invoiceData}
            fileName="invoice_data"
            header="ID,Name,Username,Avatar,Email,Due Date,Amount,Status,Created At"
          />
          <Link href={routes.invoice.create} className="w-full @lg:w-auto">
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Invoice
            </Button>
          </Link>
        </div>
      </PageHeader>
      <div className='mb-5'>
     <InvoiceCards/>
     </div>

      <InvoiceTable data={invoiceData} />
    </>
  );
}
