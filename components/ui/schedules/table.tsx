import { UpdateSchedule, DeleteSchedule, ViewSchedule } from '@/components/ui/schedules/buttons';
import { fetchSchedules } from '@/components/lib/scheduleAction';
import { classInfo } from '@/components/lib/definitions';
import Search from "@/components/ui/schedules/search";
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon';


export default async function ScheduleTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const schedules: any = await fetchSchedules();

  return (
    <div className="flow-root">
      <div className="inline-block align-middle w-full">
        <div className='px-4 py-3 rounded-t-md dark:bg-slate-900 bg-slate-100 flex justify-between'>
          <div className='text-md w-6 aspect-square flex justify-center items-center'>
            <DocumentTextIcon className='text-inherit'/>
          </div>
          <div>
            <Search placeholder='Search Schedule'/>
          </div>
        </div>
        <div className="rounded-b-lg p-4 md:pt-0 h-[75vh] w-full dark:bg-slate-800 bg-slate-100 overflow-y-scroll">
          <div className="md:hidden">
          </div>
          <table className="hidden md:table w-full ">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 pt-4 pb-2 font-medium ">
                  N
                  <sup>o</sup>
                </th>
                <th scope="col" className="px-3 pt-4 pb-2 font-medium">
                  Class Name
                </th>
                <th scope="col" className="px-3 pt-4 pb-2 font-medium">
                  Generation
                </th>
                <th scope="col" className="px-3 pt-4 pb-2 font-medium">
                  Department
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule : classInfo, index : number) => (
                <tr
                  key={schedule.name}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-2">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2">
                    {schedule.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2">
                    {schedule.generation}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2">
                    {schedule.department}
                  </td>
                  <td className="whitespace-nowrap py-2 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewSchedule name={schedule.name} generation={schedule.generation} department={schedule.department}/>
                      <UpdateSchedule id={schedule.name} />
                      <DeleteSchedule id={schedule.name} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
