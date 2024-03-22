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
// import type { GetStaticProps,NextPage } from 'next';
import { routes } from '@/config/routes';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import AvatarCard from '@/components/ui/avatar-card';
import { ClientType } from '@/data/clients-data';
import { PiStarFill } from 'react-icons/pi';
import DeletePopover from '@/app/shared/delete-popover';
import { useQuery, gql ,useMutation} from '@apollo/client';
import { useEffect, useState } from 'react';



const CLIENT_QUERY = gql`
  query GetClients {
    getClients {
      total
      clients {
        id
        name
        emails
        alias
        ruc
        dv
        phone
        receptorFeType
        contributorType
        imageUrl
      }
    }
  }
`;

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
  handleDeleteClient:(id: string) => void;
};

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
  handleDeleteClient,
}: Columns) => {

  const { data: clientsData, error, loading } = useQuery(CLIENT_QUERY);
  console.log(clientsData, 'clientsData');


  return [
    {
      title: (
        <div className="ps-3.5">
          <Checkbox
            title={'Select All'}
            onChange={handleSelectAll}
            checked={
              !loading &&
              clientsData &&
              clientsData.getClients &&
              clientsData.getClients.clients &&
              checkedItems.length === clientsData.getClients.clients.length
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
      title: <HeaderCell title="Client Name" />,
      dataIndex: 'name',
      key: 'name',
      width: 300,
      hidden: 'customer',
      render: (_: string, row: ClientType) => (
        <AvatarCard
        // src={row.imageUrl}
          src={row.image}
          name={row.name}
          avatarProps={{
            name: row.name,
            size: 'lg',
            className: 'rounded-lg',
          }}
        />
      ),
    },
    // {
    //   title: <HeaderCell title="Client Name" />,
    //   dataIndex: 'name',
    //   key: 'name',
    //   width: 300,
    //   hidden: 'customer',
    //   render: (name: string) => <Text className="text-sm">{name}</Text>,
    // },
    {
      title: <HeaderCell title="Alias" />,
      dataIndex: 'alias',
      key: 'alias',
      width: 150,
      render: (value: string) =>(
       <Text className="text-sm">{value}</Text>
       ),
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
      title: <HeaderCell title="Email" sortable />,
      dataIndex: 'email',
      key: 'email',
      width: 150,
      render: (value: string) => (
        <Text className="font-medium text-gray-700">{value}</Text>
      ),
    },
    {
      title: <HeaderCell title="Ruc" sortable />,
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
      render: (_: string, row: ClientType) => (
        <div className="flex items-center justify-end gap-3 pe-4">
          <Tooltip
            size="sm"
            content={'Edit Clients'}
            placement="top"
            color="invert"
          >
            <Link href={routes.client.ediClient(row.id)}>
              <ActionIcon
                size="sm"
                variant="outline"
                aria-label={'Edit Clients'}
              >
                <PencilIcon className="h-4 w-4" />
              </ActionIcon>
            </Link>
          </Tooltip>
          <Tooltip
            size="sm"
            content={'View Clients'}
            placement="top"
            color="invert"
          >
            <Link href={routes.client.clientDetails(row.id)}>
              <ActionIcon
                size="sm"
                variant="outline"
                aria-label={'View Clients'}
              >
                <EyeIcon className="h-4 w-4" />
              </ActionIcon>
            </Link>
          </Tooltip>
          <DeletePopover
            title={`Delete Client ${row.name}`}
            description={`Are you sure you want to delete client ${row.name}?`}
            onDelete={() => handleDeleteClient(row.id)}
          />
        </div>
      ),
    },
  ];
};


