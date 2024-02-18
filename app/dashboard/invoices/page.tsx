import Pagination from '@/components/ui/invoices/pagination';
import Search from '@/components/ui/search';
import Table from '@/components/ui/invoices/table';
import { CreateInvoice } from '@/components/ui/invoices/buttons';
import { InvoicesTableSkeleton } from '@/components/ui/skeletons';
import { Suspense } from 'react';
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;


  return (
    <div className="w-full py-2">
      <div className="flex w-full items-center justify-between">
        <div className=' px-4 py-2 rounded-md bg-slate-100 shadow-sm'>
          <h1 className="text-lg hover:text-sky-500">Invoices</h1>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}