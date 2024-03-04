import { Link } from 'react-scroll';
import cn from '@/utils/class-names';
import SimpleBar from '@/components/ui/simplebar';

export const formParts = {
  summary: 'summary',
  // media: 'media',
  // pricingInventory: 'pricingInventory',
  // productIdentifiers: 'productIdentifiers',
  // shipping: 'shipping',
  // seo: 'seo',
  // deliveryEvent: 'deliveryEvent',
  // variantOptions: 'variantOptions',
  // tagsAndCategory: 'tagsAndCategory',
};

export const menuItems = [
  {
    label: 'Summary',
    value: formParts.summary,
  },
  // {
  //   label: 'Images & Gallery',
  //   value: formParts.media,
  // },
  // {
  //   label: 'Pricing & Inventory',
  //   value: formParts.pricingInventory,
  // },
  // {
  //   label: 'Product Identifiers & Custom Fields',
  //   value: formParts.productIdentifiers,
  // },
  // {
  //   label: 'Shipping',
  //   value: formParts.shipping,
  // },
  // {
  //   label: 'SEO',
  //   value: formParts.seo,
  // },
  // {
  //   label: 'Variant Options',
  //   value: formParts.variantOptions,
  // },
];

interface FormNavProps {
  className?: string;
}

export default function FormNav({ className }: FormNavProps) {
  return (
    <div
      className={cn(
        'sticky top-[68px] z-20 border-b border-gray-300  bg-white py-0 font-medium text-gray-500 @2xl:top-[72px] 2xl:top-20 dark:bg-gray-50',
        className
      )}
    >
      <SimpleBar>
        <div className="inline-grid grid-flow-col gap-5 md:gap-7 lg:gap-10">
          {menuItems.map((tab, idx) => (
            <Link
              key={tab.value}
              to={tab.value}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={idx === 0 ? -250 : -150}
              duration={500}
              className="relative cursor-pointer whitespace-nowrap py-4 hover:text-gray-1000"
              activeClass="active before:absolute before:bottom-0 before:left-0 before:z-[1] before:h-0.5 before:w-full before:bg-gray-1000 font-semibold text-gray-1000"
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}
