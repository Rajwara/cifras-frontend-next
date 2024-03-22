'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTable } from '@/hooks/use-table';
import { useColumn } from '@/hooks/use-column';
import { Button } from 'rizzui';
import ControlledTable from '@/components/controlled-table';
import { getColumns } from '@/app/shared/clients/client-list/columns';
import { useQuery, gql,useMutation } from '@apollo/client';
import { ClientType } from '@/data/clients-data';

const FilterElement = dynamic(
  () => import('@/app/shared/clients/client-list/filter-element'),
  { ssr: false }
);
const TableFooter = dynamic(() => import('@/app/shared/table-footer'), {
  ssr: false,
});

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

const filterState = {
  price: ['', ''],
  createdAt: [null, null],
  status: '',
};

export default function ClientTable({ data = [] }: { data: any[] }) {
  const [result,setResult] = useState([]);
   const { data: clientData, error, loading } = useQuery(CLIENT_QUERY);

   const DELETE_CLIENT_MUTATION = gql`
   mutation DeleteClient($id: Int!) {
     deleteClient(id: $id)
   }
 `;
   const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION);
 
   const handleDeleteClient = async (id: string) => {
    try {
      const parsedId = parseInt(id); // Convert id to an integer
      // handleDelete(id);
     
      await deleteClient({ variables: { id: parsedId } });
      const newData = result.filter((el:any) => el.id !== id)
      setResult(newData)
      // No need to filter clients manually
      // Apollo cache will update automatically
  
      console.log('Client deleted successfully');
    } catch (error) {
      console.error('Error deleting client:', error);
      // Handle error, display error message, etc.
    }
  };
  
 

  const [pageSize, setPageSize] = useState(10);

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = useCallback((id: string) => {
    handleDelete(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    isLoading,
    isFiltered,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    filters,
    updateFilter,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    selectedRowKeys,
    setSelectedRowKeys,
    handleRowSelect,
    handleSelectAll,
    handleDelete,
    handleReset,
  } = useTable(data, pageSize, filterState);

  const columns = useMemo(
    () =>
      getColumns({
        data,
        sortConfig,
        checkedItems: selectedRowKeys,
        onDeleteItem,
        onHeaderCellClick,
        onChecked: handleRowSelect,
        handleSelectAll,
        handleDeleteClient
      }),
    [
      selectedRowKeys,
      onHeaderCellClick,
      sortConfig.key,
      sortConfig.direction,
      onDeleteItem,
      handleRowSelect,
      handleSelectAll,
      handleDeleteClient
    ]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);
console.log(tableData,"table");
console.log(clientData?.getClients?.clients , 'clinetsData');
console.log(result,"Result");
useEffect(()=>{

  // if(!isLoading){
    setResult(clientData?.getClients?.clients);
  
  // }
},[clientData])

  return (
    <>
      <ControlledTable
        variant="modern"
        isLoading={isLoading}
        showLoadingText={true}
        data={result}
        // @ts-ignore
        columns={visibleColumns}
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
        filterOptions={{
          searchTerm,
          onSearchClear: () => {
            handleSearch('');
          },
          onSearchChange: (event) => {
            handleSearch(event.target.value);
          },
          hasSearched: isFiltered,
          hideIndex: 1,
          columns,
          checkedColumns,
          setCheckedColumns,
          enableDrawerFilter: true,
        }}
        filterElement={
          <FilterElement
            filters={filters}
            isFiltered={isFiltered}
            updateFilter={updateFilter}
            handleReset={handleReset}
          />
        }
        tableFooter={
          <TableFooter
            checkedItems={selectedRowKeys}
            handleDelete={(ids: string[]) => {
              setSelectedRowKeys([]);
              handleDelete(ids);
            }}
          >
            <Button size="sm" className="dark:bg-gray-300 dark:text-gray-800">
              Download {selectedRowKeys.length}{' '}
              {selectedRowKeys.length > 1 ? 'Clients' : 'client'}
            </Button>
          </TableFooter>
        }
        className="overflow-hidden rounded-md border border-muted text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
      />
    </>
  );
}
