import Vendor from '@/app/shared/option-dashboard/vendor/vendor';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Vendor'),
};

export default function OptionPage() {
  return <Vendor />;
}
