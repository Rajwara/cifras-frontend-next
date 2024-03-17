import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import InventoryAvailability from '@/app/shared/inventory/create-edit/product-availability';
import InventoryTracing from '@/app/shared/inventory/create-edit/inventory-tracking';
import InventoryPricing from '@/app/shared/inventory/create-edit/product-pricing';

interface PricingInventoryProps {
  className?: string;
}

export default function PricingInventory({ className }: PricingInventoryProps) {
  return (
    <>
      <FormGroup
        title="Pricing"
        description="Add your inventory pricing here"
        className={cn(className)}
      >
        <InventoryPricing />
      </FormGroup>
      <FormGroup
        title="Inventory Tracking"
        description="Add your Inventory inventory info here"
        className={cn(className)}
      >
        <InventoryTracing />
      </FormGroup>
      <FormGroup
        title="Availability"
        description="Add your  inventory info here"
        className={cn(className)}
      >
        <InventoryAvailability />
      </FormGroup>
    </>
  );
}
