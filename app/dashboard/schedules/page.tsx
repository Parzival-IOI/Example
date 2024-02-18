import { CreateInvoice } from "@/components/ui/invoices/buttons";
import Search from "@/components/ui/search";
import { Suspense } from "react";
import Table from '@/components/ui/schedules/table';


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
    <div className="w-full">   
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-2">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
       <Suspense key={query + currentPage} fallback={<></>}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}