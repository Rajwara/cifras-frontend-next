import PurchaseOrdes from '@/app/shared/suppliers-dashboard/purchaseorders/purchaseorders';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('PurchaseOrdes'),
};

export default function PurchaseOrdesPage() {
  return <PurchaseOrdes />;
}
