import Electronibiling from "@/app/shared/electronicbiling/electronicbiling";
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Electronibiling'),
};

export default function ElectronibilingPage() {
  return <Electronibiling />;
}
