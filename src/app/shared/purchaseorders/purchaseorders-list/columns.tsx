'use client';

import Link from 'next/link';
import { HeaderCell } from '@/components/ui/table';
import {
  Badge,
  Text,
  Checkbox,
  Progressbar,
  Tooltip,
  ActionIcon,
} from 'rizzui';
import { routes } from '@/config/routes';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import AvatarCard from '@/components/ui/avatar-card';
import { PurchaseOrderType } from '@/data/purchaseorder-data';
import { PiStarFill } from 'react-icons/pi';
import DeletePopover from '@/app/shared/delete-popover';

// get status badge
function getStatusBadge(status: string) {
  switch (status?.toLowerCase()) {
    case 'pending':
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case 'publish':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

// get stock status
function getStockStatus(status: number) {
  if (status === 0) {
    return (
      <>
        <Progressbar
          value={status}
          color="danger"
          label={'out of stock'}
          className="h-1.5 w-24 bg-red/20"
        />
        <Text className="pt-1.5 text-[13px] text-gray-500">out of stock </Text>
      </>
    );
  } else if (status <= 20) {
    return (
      <>
        <Progressbar
          value={status}
          color="warning"
          label={'low stock'}
          className="h-1.5 w-24 bg-orange/20"
        />
        <Text className="pt-1.5 text-[13px] text-gray-500">
          {status} low stock
        </Text>
      </>
    );
  } else {
    return (
      <>
        <Progressbar
          value={status}
          color="success"
          label={'stock available'}
          className="h-1.5 w-24 bg-green/20"
        />
        <Text className="pt-1.5 text-[13px] text-gray-500">
          {status} in stock
        </Text>
      </>
    );
  }
}

// get rating calculation
function getRating(rating: number[]) {
  let totalRating = rating.reduce((partialSum, value) => partialSum + value, 0);
  let review = totalRating / rating?.length;

  return (
    <div className="flex items-center">
      <span className="me-1 shrink-0">{review.toFixed(1)}</span>
      {[...new Array(5)].map((arr, index) => {
        return index < Math.round(review) ? (
          <PiStarFill className="w-4 fill-orange text-orange" key={index} />
        ) : (
          <PiStarFill className="w-4 fill-gray-300 text-gray-300" key={index} />
        );
      })}{' '}
      <span className="ms-1 shrink-0">({totalRating})</span>
    </div>
  );
}

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
}: Columns) => [
  {
    title: (
      <div className="ps-3.5">
        <Checkbox
          title={'Select All'}
          onChange={handleSelectAll}
          checked={checkedItems.length === data.length}
          className="cursor-pointer"
        />
      </div>
    ),
    dataIndex: 'checked',
    key: 'checked',
    width: 30,
    render: (_: any, row: any) => (
      <div className="inline-flex ps-3.5">
        <Checkbox
          className="cursor-pointer"
          checked={checkedItems.includes(row.id)}
          {...(onChecked && { onChange: () => onChecked(row.id) })}
        />
      </div>
    ),
  },
  // {
  //   title: <HeaderCell title="Purchase Order" />,
  //   dataIndex: 'name',
  //   key: 'name',
  //   width: 300,
  //   hidden: 'customer',
  //   render: (_: string, row: PurchaseOrderType) => (
  //     <AvatarCard
  //       src={row.image}
  //       name={row.name}
  //       description={row.Vendor}
  //       avatarProps={{
  //         name: row.name,
  //         size: 'lg',
  //         className: 'rounded-lg',
  //       }}
  //     />
  //   ),
  // },
  {
    title: <HeaderCell title="Purchase Order" />,
    dataIndex: 'ponumber',
    key: 'ponumber',
    width: 150,
    render: (vendor: string) => <Text className="text-sm">{vendor}</Text>,
  },

  {
    title: <HeaderCell title="Date of Purchasing" />,
    dataIndex: 'dateofpurchasing',
    key: 'dateofpurchasing',
    width: 150,
    render: (dateofpurchasing: string) => <Text className="text-sm">{dateofpurchasing}</Text>,
  },
  {
    title: <HeaderCell title="Sub Total" />,
    dataIndex: 'subtotal',
    key: 'subtotal',
    width: 150,
    render: (vendor: string) => <Text className="text-sm">{vendor}</Text>,
  },
  {
    title: <HeaderCell title="Tax" />,
    dataIndex: 'tax',
    key: 'tax',
    width: 150,
    render: (vendor: string) => <Text className="text-sm">{vendor}</Text>,
  },
  {
    title: <HeaderCell title="Shipping" />,
    dataIndex: 'shipping',
    key: 'shipping',
    width: 150,
    render: (vendor: string) => <Text className="text-sm">{vendor}</Text>,
  },
  {
    title: <HeaderCell title="Total" />,
    dataIndex: 'total',
    key: 'total',
    width: 150,
    render: (vendor: string) => <Text className="text-sm">{vendor}</Text>,
  },
  {
    title: (
      <HeaderCell
        title="Status"
      />
    ),
    // onHeaderCell: () => onHeaderCellClick('availablestock'),
    dataIndex: 'status',
    key: 'status',
    width: 200,
    render: (status: string) => <Text className="text-sm">{status}</Text>,
  },
  // {
  //   title: (
  //     <HeaderCell
  //       title="Unit Price"
  //       sortable
  //       ascending={
  //         sortConfig?.direction === 'asc' && sortConfig?.key === 'unitprice'
  //       }
  //     />
  //   ),
  //   onHeaderCell: () => onHeaderCellClick('unitprice'),
  //   dataIndex: 'unitprice',
  //   key: 'unitprice',
  //   width: 150,
  //   render: (value: string) => (
  //     <Text className="font-medium text-gray-700">${value}</Text>
  //   ),
  // },
  // {
  //   title: (
  //     <HeaderCell
  //       title="Unit of Measure"
  //       sortable
  //       ascending={
  //         sortConfig?.direction === 'asc' && sortConfig?.key === 'unitofmeasure'
  //       }
  //     />
  //   ),
  //   onHeaderCell: () => onHeaderCellClick('unitofmeasure'),
  //   dataIndex: 'unitofmeasure',
  //   key: 'unitofmeasure',
  //   width: 150,
  //   render: (value: string) => (
  //     <Text className="font-medium text-gray-700">${value}</Text>
  //   ),
  // },

  {
    title: <HeaderCell title="Notes" />,
    dataIndex: 'notes',
    key: 'notes',
    width: 150,
    render: (description: string) => <Text className="text-sm">{description}</Text>,
  },
  // {
  //   title: <HeaderCell title="Rating" />,
  //   dataIndex: 'rating',
  //   key: 'rating',
  //   width: 200,
  //   render: (rating: number[]) => getRating(rating),
  // },
  // {
  //   title: <HeaderCell title="Status" />,
  //   dataIndex: 'status',
  //   key: 'status',
  //   width: 120,
  //   render: (value: string) => getStatusBadge(value),
  // },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 120,
    render: (_: string, row: PurchaseOrderType) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={'Edit Purchase Order'}
          placement="top"
          color="invert"
        >
          <Link href={routes.purchaseorders.ediPurchaseOrder(row.id)}>
            <ActionIcon size="sm" variant="outline" aria-label={'Edit Purchase Order'}>
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip
          size="sm"
          content={'View Purchase Order'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eproduct.productDetails(row.id)}>
            <ActionIcon size="sm" variant="outline" aria-label={'View Purchase Order'}>
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete the Purchase Order`}
          description={`Are you sure you want to delete this #${row.id} Purchase Order?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
