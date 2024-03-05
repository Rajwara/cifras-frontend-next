import React from 'react';
import GeneralSales from '../../../../public/reportsIcon/GeneralSales.svg';
import AccountStatus from '../../../../public/reportsIcon/AccountStatus.svg';
import ProfitabilityPerItem from '../../../../public/reportsIcon/ProfitabilityPerItem.svg';
import SalesPerClient from '../../../../public/reportsIcon/SalesPerClient.svg';
import SalesPerItem from '../../../../public/reportsIcon/SalesPerItem.svg';
import SalesPerVendor from '../../../../public/reportsIcon/SalesPerVendor.svg';
import AccountsReceivable from '../../../../public/reportsIcon/AccountsReceivable.svg';
import AccountsPayable from '../../../../public/reportsIcon/AccountsPayable.svg';
import IncomeExpenses from '../../../../public/reportsIcon/Income&Expenses.svg';
import InventoryValue from '../../../../public/reportsIcon/InventoryValue.svg';
import Transactions from '../../../../public/reportsIcon/Transactions.svg';
import Purchases from '../../../../public/reportsIcon/Purchases.svg';
import AnnualReport from '../../../../public/reportsIcon/AnnualReport.svg';
import IncomeStatement from '../../../../public/reportsIcon/IncomeStatement.svg';
import StatementofFinancialPosition from '../../../../public/reportsIcon/StatementofFinancialPosition.svg';
import TaxesWithholding from '../../../../public/reportsIcon/TaxesWithholding.svg';
import MovementsPerAccount from '../../../../public/reportsIcon/MovementsPerAccount.svg';
import AccountingJournalReport from '../../../../public/reportsIcon/AccountingJournalReport.svg';
import AuxiliaryPerThirdParties from '../../../../public/reportsIcon/AuxiliaryPerThirdParties.svg';
import GeneralLedgerReport from '../../../../public/reportsIcon/GeneralLedgerReport.svg';
import TrialBalance from '../../../../public/reportsIcon/TrialBalance.svg';
import DetailedTaxReport from '../../../../public/reportsIcon/DetailedTaxReport.svg';



import Image from 'next/image';

const reportgallery = () => {
  return (
    <div>
      <div>
        <h3>Sales Reports</h3>
        <div className="my-8 grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-8 py-8">
            <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
              <Image src={GeneralSales} className="" alt="" />
            </span>
            <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              General Sales
            </p>
            <span className="-mt-2">
              <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                2.4 GB . 135 files
              </p>
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={SalesPerItem} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Sales Per Item
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={SalesPerClient} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Sales Per Client
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={ProfitabilityPerItem} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Profitability Per Item
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="my-8 grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-8 py-8">
            <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
              <Image src={SalesPerVendor} className="" alt="" />
            </span>
            <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Sales Per Vendor
            </p>
            <span className="-mt-2">
              <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                2.4 GB . 135 files
              </p>
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={AccountStatus} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Account Status
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* administrative reports  */}

      <div>
        <h3>Administrative Reports</h3>
        <div className="my-8 grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-8 py-8">
            <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
              <Image src={AccountsReceivable} className="" alt="" />
            </span>
            <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Accounts Receivable
            </p>
            <span className="-mt-2">
              <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                2.4 GB . 135 files
              </p>
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={AccountsPayable} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Accounts Payable
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={IncomeExpenses} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Income & Expenses
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={InventoryValue} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Inventory Value
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="my-8 grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-8 py-8">
            <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
              <Image src={Transactions} className="" alt="" />
            </span>
            <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Transactions
            </p>
            <span className="-mt-2">
              <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                2.4 GB . 135 files
              </p>
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={Purchases} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Purchases
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={AnnualReport} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Annual Report
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* Accounting reports  */}


      <div>
        <h3>Accounting Reports</h3>
        <div className="my-8 grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-8 py-8">
            <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
              <Image src={IncomeStatement} className="" alt="" />
            </span>
            <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
            Income Statement

            </p>
            <span className="-mt-2">
              <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                2.4 GB . 135 files
              </p>
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={StatementofFinancialPosition} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Statement of Financial Position
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={TaxesWithholding} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Taxes & Withholding
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={MovementsPerAccount} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Movements Per Account
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="my-8 grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-8 py-8">
            <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
              <Image src={AccountingJournalReport} className="" alt="" />
            </span>
            <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
            Accounting Journal Report
            </p>
            <span className="-mt-2">
              <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                2.4 GB . 135 files
              </p>
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={AuxiliaryPerThirdParties} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Auxiliary Per Third Parties
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={GeneralLedgerReport} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              General Ledger Report
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={TrialBalance} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Trial Balance
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="my-8 grid grid-cols-4 gap-4">
         
         
         
          <div>
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={DetailedTaxReport} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Detailed Tax Report
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Accounting report1  */}
      <div>
        <h3>Accounting Report1</h3>
        <div className="my-8 grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-8 py-8">
            <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
              <Image src={GeneralSales} className="" alt="" />
            </span>
            <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
            Export Invoices
            </p>
            <span className="-mt-2">
              <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                2.4 GB . 135 files
              </p>
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={SalesPerItem} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Accountant Report
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={SalesPerClient} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Sales Per Client
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={ProfitabilityPerItem} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Profitability Per Item
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="my-8 grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-8 py-8">
            <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
              <Image src={SalesPerVendor} className="" alt="" />
            </span>
            <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
              Sales Per Vendor
            </p>
            <span className="-mt-2">
              <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                2.4 GB . 135 files
              </p>
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-4  rounded border border-[#EBEBEB] px-4 py-8">
              <span className="w-[56px] rounded-md bg-[#ebebeb] p-2">
                <Image src={AccountStatus} className="" alt="" />
              </span>
              <p className="font-inter text-base font-semibold leading-7 text-[#404040]">
                Account Status
              </p>
              <span className="-mt-2">
                <p className="leasding-7 font-inter text-sm font-normal text-[#404040]">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>

    </div>
  );
};

export default reportgallery;
