import React from 'react'
import CompanyData from '@/app/shared/option-dashboard/companydata/companydata';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('OptionChild'),
};

export default function CompanydataPage() {
  return <CompanyData />;
}

