import { usersData } from '@/data/users-data';
import PageHeader from '@/app/shared/page-header';
import ModalButton from '@/app/shared/modal-button';
import ReportGrid from '@/app/shared/report-permissions/report-grid';
import UsersTable from '@/app/shared/report-permissions/users-table';
import CreateReport from '@/app/shared/report-permissions/create-report';
import RepotNavigation from '@/app/shared/report-permissions/navigation'
const pageHeader = {
  title: 'Report and Permissions ',
  breadcrumb: [
    {
      href: '/',
      name: 'Dashboard',
    },
    {
      name: 'Report Management & Permission',
    },
  ],
};

export default function BlankPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <ModalButton label="Add New Report" view={<CreateReport />} />
      </PageHeader>
      {/* <ReportGrid /> */}
      <RepotNavigation/>
      <UsersTable data={usersData} />
    </>
  );
}
