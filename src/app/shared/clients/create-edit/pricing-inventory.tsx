import FormGroup from '@/app/shared/form-group';
import cn from '@/utils/class-names';
import ClientAvailability from '@/app/shared/clients/create-edit/product-availability';
import InventoryTracing from '@/app/shared/clients/create-edit/inventory-tracking';
import ClientPricing from '@/app/shared/clients/create-edit/product-pricing';

interface PricingInventoryProps {
  className?: string;
}

export default function PricingInventory({ className }: PricingInventoryProps) {
  return (
    <>
      <FormGroup
        title="Pricing"
        description="Add your Clients pricing here"
        className={cn(className)}
      >
        <ClientPricing />
      </FormGroup>
      <FormGroup
        title="Inventory Tracking"
        description="Add your Clients inventory info here"
        className={cn(className)}
      >
        <InventoryTracing />
      </FormGroup>
      <FormGroup
        title="Availability"
        description="Add your Clients inventory info here"
        className={cn(className)}
      >
        <ClientAvailability />
      </FormGroup>
    </>
  );
}
