import Form from '@/components/ui/invoices/create-form';
import Breadcrumbs from '@/components/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/components/lib/data';
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