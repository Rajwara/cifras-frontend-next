import Inventory from '@/app/shared/inventory/inventory';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Inventory'),
};

export default function InventoryPage() {
  return <Inventory />;
}
