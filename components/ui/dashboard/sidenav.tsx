import Link from 'next/link';
import NavLinks from '@/components/ui/dashboard/nav-links';
import MobileNav from '@/components/ui/dashboard/mobile-nav';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col pb-3 pt-2 md:px-2">
      <div className="flex justify-start items-center lg:h-24 h-[3rem] lg:pb-4 pt-1 px-4 gap-4">
        <Link className="bg-rose-500 w-[2.5rem] aspect-square p-1 rounded-lg flex justify-center items-center text-yellow-300 hover:text-yellow-500" href="/" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bug" viewBox="0 0 16 16">
            <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A5 5 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A5 5 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623M4 7v4a4 4 0 0 0 3.5 3.97V7zm4.5 0v7.97A4 4 0 0 0 12 11V7zM12 6a4 4 0 0 0-1.334-2.982A3.98 3.98 0 0 0 8 2a3.98 3.98 0 0 0-2.667 1.018A4 4 0 0 0 4 6z"/>
          </svg>
        </Link>
        <div className='dark:text-slate-50 text-lg'>
          Deadline
        </div>
        <MobileNav />
      </div>
      <div className="hidden lg:flex flex-col justify-start items-center gap-2 pb-6 px-2">
        <NavLinks />
      </div>
    </div>
  );
}