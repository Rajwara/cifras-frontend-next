import Link from 'next/link';
import { routes } from '@/config/routes';
import { Button } from 'rizzui';
import PageHeader from '@/app/shared/page-header';
import OrdersTable from '@/app/shared/order/order-list/table';
import { PiPlusBold } from 'react-icons/pi';
import { orderData } from '@/data/order-data';
import { metaObject } from '@/config/site.config';
import ExportButton from '@/app/shared/export-button';
import NumberOfOrder from '@/app/shared/order/order-cards/numberoforder';
import TotalRevenue from '@/app/shared/order/order-cards/totalrevenue';
import OrderCards from '@/app/shared/order/order-cards/ordercards';

export const metadata = {
  ...metaObject('Orders'),
};

const pageHeader = {
  title: 'Orders',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.order.orders,
      name: 'Orders',
    },
    {
      name: 'List',
    },
  ],
};

export default function OrdersPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
{/* 
      <div className='middle lg:w-[80%] xl:w-[60%] flex flex-col lg:flex-row gap-6 justify-center'>
      <TotalRevenue/>
      <NumberOfOrder/>
    </div> */}

        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={orderData}
            fileName="order_data"
            header="Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At"
          />
          <Link
            href={routes.order.createOrder}
            className="w-full @lg:w-auto"
          >
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Order
            </Button>
          </Link>
        </div>
      </PageHeader>
      <div className='mb-5'>
     <OrderCards/>
     </div>

      <OrdersTable data={orderData} />
    </>
  );
}
