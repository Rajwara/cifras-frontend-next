'use client';

import { useQuery, gql,useMutation } from '@apollo/client';
import { useCallback, useEffect, useMemo, useState } from 'react';

import dynamic from 'next/dynamic';
import { useTable } from '@/hooks/use-table';
import { useColumn } from '@/hooks/use-column';
import { Button } from 'rizzui';
import ControlledTable from '@/components/controlled-table';
import { getColumns } from '@/app/shared/suppliers/supplier-list/columns';
const FilterElement = dynamic(
  () => import('@/app/shared/suppliers/supplier-list/filter-element'),
  { ssr: false }
);
const TableFooter = dynamic(() => import('@/app/shared/table-footer'), {
  ssr: false,
});


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



const filterState = {
  price: ['', ''],
  createdAt: [null, null],
  status: '',
};

export default function ProductsTable({ data = [] }: { data: any[] }) {
  const [pageSize, setPageSize] = useState(10);
  const [result,setResult] = useState([]);

  // passing supplier data 
  const { data: suppliersData, error, loading } = useQuery(SUPPLIER_QUERY);
  console.log(suppliersData, 'suppliersData');



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
      }),
    [selectedRowKeys, onHeaderCellClick, sortConfig.key, sortConfig.direction, onDeleteItem, handleRowSelect, handleSelectAll]
  );
  
  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);
//     console.log(tableData,"table");
// console.log(clientData?.getClients?.clients , 'clinetsData');
// console.log(result,"Result");
    useEffect(()=>{

      // if(!isLoading){
        setResult(suppliersData?.getSuppliers?.suppliers);
      
      // }
    },[suppliersData])
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
              {selectedRowKeys.length > 1 ? 'Suppliers' : 'Supplier'}
            </Button>
          </TableFooter>
        }
        className="overflow-hidden rounded-md border border-muted text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
      />
    </>
  );
}
