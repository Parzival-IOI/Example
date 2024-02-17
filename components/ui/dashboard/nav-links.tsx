'use client';
 
import { usePathname } from 'next/navigation';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Employee', href: '/dashboard/employees', icon: UserGroupIcon},
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href} className={`w-full flex justify-start items-center gap-4 rounded-lg p-4 ${pathname === link.href ? 'dark:text-slate-50 text-slate-950 dark:bg-slate-500 bg-slate-800' : 'dark:text-slate-300 text-slate-950 dark:bg-slate-700 bg-slate-300 hover:dark:bg-slate-500 hover:bg-slate-800 hover:dark:text-slate-50 hover:text-slate-950 transition-colors duration-300' }`} >
            <LinkIcon className="w-6" />
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
