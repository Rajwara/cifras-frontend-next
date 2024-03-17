'use client';

import { useParams } from 'next/navigation';
import PurchaseOrdersDetailsRelatedProducts from '@/app/shared/purchaseorders/product-details-related-products';
import PurchaseOrdersDetailsDescription from '@/app/shared/purchaseorders/product-details-description';
import PurchaseOrdersDeliveryOptions from '@/app/shared/purchaseorders/product-delivery-options';
import PurchaseOrdersDetailsGallery from '@/app/shared/purchaseorders/product-details-gallery';
import PurchaseOrdersDetailsSummery from '@/app/shared/purchaseorders/product-details-summery';
import PurchaseOrdersDetailsReview from '@/app/shared/purchaseorders/product-details-review';
import { modernProductsGrid } from '@/data/shop-products';
import { generateSlug } from '@/utils/generate-slug';

export default function ProductDetails() {
  const params = useParams();
  const product =
    modernProductsGrid.find(
      (item) => generateSlug(item.title) === params.slug
    ) ?? modernProductsGrid[0];

  return (
    <div className="@container">
      <div className="@3xl:grid @3xl:grid-cols-12">
        <div className="col-span-7 mb-7 @container @lg:mb-10 @3xl:pe-10">
          <PurchaseOrdersDetailsGallery />
        </div>
        <div className="col-span-5 @container">
          <PurchaseOrdersDetailsSummery product={product} />
          <PurchaseOrdersDeliveryOptions />
          <PurchaseOrdersDetailsDescription />
          <PurchaseOrdersDetailsReview />
        </div>
      </div>
      <PurchaseOrdersDetailsRelatedProducts />
    </div>
  );
}
