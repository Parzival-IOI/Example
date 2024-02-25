import SideNav from '@/components/ui/dashboard/sidenav';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row overflow-x-hidden relative p-0 m-0 ">
      <div className="w-full flex-none md:w-48 dark:bg-slate-950 bg-white">
        <SideNav />
      </div>
      <div className="flex-grow">
        <div className="hidden lg:flex w-full h-5 md:h-14 lg:h-18 dark:bg-slate-950 bg-white p-3 justify-between items-center ">
          <div></div>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="flex justify-evenly gap-2 hover:bg-orange-500/50 px-3 py-2 rounded-md">
              <PowerIcon className="w-5" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
        <div className='px-6 md:overflow-y-auto md:px-4 '>
          {children}
        </div>
      </div>
    </div>
  );
}