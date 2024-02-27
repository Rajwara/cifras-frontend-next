import Reports from '@/app/shared/reports/reports';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Reports'),
};

export default function OptionPage() {
  return <Reports />;
}
