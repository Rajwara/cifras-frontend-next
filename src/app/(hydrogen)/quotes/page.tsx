import Quotes from "@/app/shared/quotes/quotes";
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Quotes'),
};

export default function OptionPage() {
  return <Quotes />;
}
