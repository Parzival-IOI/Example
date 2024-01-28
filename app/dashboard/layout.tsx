import SideNav from '@/app/ui/dashboard/sidenav';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row overflow-hidden relative p-0 m-0 dark:bg-slate-800 bg-white">
      <div className="w-full flex-none md:w-64 dark:bg-slate-950 bg-white">
        <SideNav />
      </div>
      <div className="flex-grow">
        <div className="hidden lg:flex w-full h-5 md:h-12 lg:h-24 dark:bg-slate-950 bg-white p-3 justify-between items-center ">
          <div></div>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="flex justify-center items-center gap-2 dark:bg-slate-600 dark:hover:bg-slate-500 py-2 px-4 rounded-md">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
        <div className='px-6 md:overflow-y-auto md:p-12 dark:bg-slate-800'>
          {children}
        </div>
      </div>
    </div>
  );
}