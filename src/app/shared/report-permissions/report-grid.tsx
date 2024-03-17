import ReportCard from '@/app/shared/report-permissions/report-card';
import SaleCard from '@/app/shared/report-permissions/sale-card';
import AccountingCard from '@/app/shared/report-permissions/accounting-card'
import AccountingreportCard from '@/app/shared/report-permissions/accountingreport1-card'

import { reportList } from '@/data/report-permissions';
import { saleList } from '@/data/sale-permissions';
import { accountingList } from '@/data/accounting-permissions';
import { accountingreportList } from '@/data/accountingreport-permissions';


import cn from '@/utils/class-names';

interface ReportGridProps {
  className?: string;
  gridClassName?: string;
}



export default function ReportGrid({
  className,
  gridClassName,
}: ReportGridProps) {
  return (
   <div>
  
  <div>
  <h1 className='my-5'>Sales Reports
    </h1>
     <div className={cn('@container', className)}>
      <div
        className={cn(
          'grid grid-cols-1 gap-6 @[36.65rem]:grid-cols-2 @[56rem]:grid-cols-3 @[78.5rem]:grid-cols-4 @[100rem]:grid-cols-5',
          gridClassName
        )}
      >
        {saleList.map((sale) => (
          <SaleCard key={sale.name} {...sale} />
          
        ))}
        
      

      </div>


      
    </div>
  </div>


   <div>
   <h1 className='my-5'>Administrative Reports</h1>
     <div className={cn('@container', className)}>
      <div
        className={cn(
          'grid grid-cols-1 gap-6 @[36.65rem]:grid-cols-2 @[56rem]:grid-cols-3 @[78.5rem]:grid-cols-4 @[100rem]:grid-cols-5',
          gridClassName
        )}
      >
        {reportList.map((report) => (
          <ReportCard key={report.name} {...report} />
          
        ))}
        
      

      </div>


      
    </div>
   </div>

   <div>
   <h1 className='my-5'>Accounting Reports</h1>
     <div className={cn('@container', className)}>
      <div
        className={cn(
          'grid grid-cols-1 gap-6 @[36.65rem]:grid-cols-2 @[56rem]:grid-cols-3 @[78.5rem]:grid-cols-4 @[100rem]:grid-cols-5',
          gridClassName
        )}
      >
        {accountingList.map((accounting) => (
          <AccountingCard key={accounting.name} {...accounting} />
          
        ))}
        
      

      </div>


      
    </div>
   </div>
   <div>
   <h1 className='my-5'>Accounting Report1</h1>
     <div className={cn('@container', className)}>
      <div
        className={cn(
          'grid grid-cols-1 gap-6 @[36.65rem]:grid-cols-2 @[56rem]:grid-cols-3 @[78.5rem]:grid-cols-4 @[100rem]:grid-cols-5',
          gridClassName
        )}
      >
        {accountingreportList.map((accountingreport) => (
          <AccountingreportCard key={accountingreport.name} {...accountingreport} />
          
        ))}
        
      

      </div>


      
    </div>
   </div>
    
    </div>
  );
}
