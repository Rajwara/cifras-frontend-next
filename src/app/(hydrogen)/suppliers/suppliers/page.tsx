import Suppliers from '@/app/shared/suppliers-dashboard/suppliers/suppliers';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Vendor'),
};

export default function SupplierPage() {
  return <Suppliers />;
}
