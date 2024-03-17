
import { CreatePurchaseOrderInput } from '@/utils/validators/create-purchaseorder.schema';
import isEmpty from 'lodash/isEmpty';
import { Title, Text, Badge } from 'rizzui';
import cn from '@/utils/class-names';

export const customFields = [
  {
    label: '',
    value: '',
  },
];
export const locationShipping = [
  {
    name: '',
    shippingCharge: '',
  },
];
export const productVariants = [
  {
    label: '',
    value: '',
  },
];
// invoice status options
// export const statusOptions = [
//   {
//     value: 'Paid',
//     label: 'Paid',
//   },
//   {
//     value: 'pending',
//     label: 'Pending',
//   },
//   {
//     value: 'overdue',
//     label: 'Overdue',
//   },
//   {
//     value: 'draft',
//     label: 'Draft',
//   },
// ];

// export function renderOptionDisplayValue(value: string) {
//   switch (value.toLowerCase()) {
//     case 'pending':
//       return (
      
//         <div className="flex items-center">
//           <Badge color="warning" renderAsDot />
//           <Text className="ms-2 font-medium capitalize text-orange-dark">
//             {value}
//           </Text>
//         </div>
        
//       );
//     case 'paid':
//       return (
//         <div className="flex items-center">
//           <Badge color="success" renderAsDot />
//           <Text className="ms-2 font-medium capitalize text-green-dark">
//             {value}
//           </Text>
//         </div>
//       );
//     case 'overdue':
//       return (
//         <div className="flex items-center">
//           <Badge color="danger" renderAsDot />
//           <Text className="ms-2 font-medium capitalize text-red-dark">
//             {value}
//           </Text>
//         </div>
//       );
//     default:
//       return (
//         <div className="flex items-center">
//           <Badge renderAsDot className="bg-gray-400" />
//           <Text className="ms-2 font-medium capitalize text-gray-600">
//             {value}
//           </Text>
//         </div>
//       );
//   }
// }

export function defaultValues(purchaseorder?: CreatePurchaseOrderInput) {
  return {
    ponumber: purchaseorder?.ponumber ?? '',
    total: purchaseorder?.total ?? '',
    notes: purchaseorder?.notes ?? '',
    subtotal: purchaseorder?.subtotal ?? '',
    tax: purchaseorder?.tax ?? '',
    shipping: purchaseorder?.shipping??'',
    dateofpurchasing: purchaseorder?.dateofpurchasing??'',
  };
}

export const purchaseorderData = {
  ponumber: '8789889',
  total: '78987',
  notes: 'This is notes',
  subtotal: 10,
  tax: 20,
  // productImages: undefined,  
  shipping: "this is shipping",
  dateofpurchasing: "10 jan, 2024",
};


