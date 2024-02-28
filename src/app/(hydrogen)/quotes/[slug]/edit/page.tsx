import Link from 'next/link';
import { Metadata } from 'next';
import { PiPlusBold } from 'react-icons/pi';
import { productData } from '@/app/shared/quotes/create-edit/form-utils';
import CreateEditQuote from '@/app/shared/quotes/create-edit';
import PageHeader from '@/app/shared/page-header';
import { metaObject } from '@/config/site.config';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';

type Props = {
  params: { slug: string };
};

/**
 * for dynamic metadata
 * @link: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  return metaObject(`Edit ${slug}`);
}

const pageHeader = {
  title: 'Edit Quote',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.quote.quotes,
      name: 'Quotes',
    },
    {
      name: 'Edit',
    },
  ],
};

export default function EditQuotePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.quote.createQuote}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button as="span" className="w-full @lg:w-auto">
            <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
            Add Quote
          </Button>
        </Link>
      </PageHeader>

      <CreateEditQuote slug={params.slug} product={productData} />
    </>
  );
}
