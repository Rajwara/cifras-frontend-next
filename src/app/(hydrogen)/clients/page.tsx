import Clients from '@/app/shared/clients/clients';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Clients'),
};

export default function ClientsPage() {
  return <Clients />;
}
