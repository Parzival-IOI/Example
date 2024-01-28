import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page() {
  const customers = await fetchCustomers();
  if(!customers) {
    return notFound();
  }
  return(
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Employees', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: `/dashboard/create`,
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}