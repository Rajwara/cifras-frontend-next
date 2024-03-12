import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import QuoteTable from '@/app/shared/quotes/quote-list/table';
import { quotesData } from '@/data/quotes-data';
import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';
import QuoteCards from '@/app/shared/quotes/quote-cards/quotecards'
export const metadata = {
  ...metaObject('Quotes'),
};

const pageHeader = {
  title: 'Quotes',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.eproduct.products,
      name: 'Products',
    },
    {
      name: 'List',
    },
  ],
};

export default function QuotesPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={quotesData}
            fileName="product_data"
            header="ID,Name,Category,Product Thumbnail,SKU,Stock,Price,Status,Rating"
          />
          <Link
            href={routes.quote.createQuote}
            className="w-full @lg:w-auto"
          >
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Quote
            </Button>
          </Link>
        </div>
      </PageHeader>
      <div className='mb-5'>
     <QuoteCards/>
     </div>

      <QuoteTable data={quotesData} />
    </>
  );
}
