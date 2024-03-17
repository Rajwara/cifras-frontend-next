import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import PurchaseOrderAvailability from '@/app/shared/purchaseorders/create-edit/product-availability';
import InventoryTracing from '@/app/shared/purchaseorders/create-edit/inventory-tracking';
import PurchaseOrderPricing from '@/app/shared/purchaseorders/create-edit/product-pricing';

interface PricingInventoryProps {
  className?: string;
}

export default function PricingInventory({ className }: PricingInventoryProps) {
  return (
    <>
      <FormGroup
        title="Pricing"
        description="Add your Purchase Orders pricing here"
        className={cn(className)}
      >
        <PurchaseOrderPricing />
      </FormGroup>
      <FormGroup
        title="Inventory Tracking"
        description="Add your Purchase Orders inventory info here"
        className={cn(className)}
      >
        <InventoryTracing />
      </FormGroup>
      <FormGroup
        title="Availability"
        description="Add your Purchase Orders inventory info here"
        className={cn(className)}
      >
        <PurchaseOrderAvailability />
      </FormGroup>
    </>
  );
}
