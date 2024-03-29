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
import { SupplierType } from '@/data/supplier-data';
import { PiStarFill } from 'react-icons/pi';
import DeletePopover from '@/app/shared/delete-popover';
import { useQuery, gql ,useMutation} from '@apollo/client';
import { useEffect, useState } from 'react';




const SUPPLIER_QUERY = gql`
query GetSuppliers {
  getSuppliers {
      suppliers {
          id
          name
          alias
          ruc
          dv
          phone
          email
          supplierType
      }
      total
  }
}
`;



// get status badge
function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
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



type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
  handleDeleteSupplier: (id: string) => void;
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
  handleDeleteSupplier
}: Columns) => {
  
  
  const { data: suppliersData, error, loading } = useQuery(SUPPLIER_QUERY);
  console.log(suppliersData, 'suppliersData');

  return[

    
  {
    title: (
      <div className="ps-3.5">
        <Checkbox
          title={'Select All'}
          onChange={handleSelectAll}
          checked={
            !loading && suppliersData && suppliersData.getSuppliers
            && suppliersData.getSuppliers.suppliers && checkedItems.length === suppliersData.getSuppliers.suppliers.length
          }
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
  {
    title: <HeaderCell title="Supplier" />,
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: <HeaderCell title="Email" sortable />,
    dataIndex: 'email',
    key: 'email',
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: <HeaderCell title="Alias" />,
    dataIndex: 'alias',
    key: 'alias',
    width: 150,
    render: (value: string) => <Text className="text-sm">{value}</Text>,
  },
  {
    title: <HeaderCell title="Phone Number" sortable />,
    dataIndex: 'phone',
    key: 'phone',
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: <HeaderCell title="RUC" sortable />,
    dataIndex: 'ruc',
    key: 'ruc',
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: <HeaderCell title="DV" sortable />,
    dataIndex: 'dv',
    key: 'dv',
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
 
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 120,
    render: (_: string, row: SupplierType) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={'Edit Supplier'}
          placement="top"
          color="invert"
        >
          <Link href={routes.supplier.editSupplier(row.id)}>
            <ActionIcon size="sm" variant="outline" aria-label={'Edit Supplier'}>
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip
          size="sm"
          content={'View Supplier'}
          placement="top"
          color="invert"
        >
          <Link href={routes.supplier.supplierDetails(row.id)}>
            <ActionIcon size="sm" variant="outline" aria-label={'View Supplier'}>
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete Suppliers ${row.name}`}
          description={`Are you sure you want to delete this #${row.name} suppliers?`}

          onDelete={() => handleDeleteSupplier(row.id)}
        />
      </div>
    ),
  },
]
};
