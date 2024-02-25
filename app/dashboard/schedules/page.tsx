
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
    <div className="w-full h-full">
      <div className="p-4">
        <Suspense key={query + currentPage} fallback={<></>}>
          <Table query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}