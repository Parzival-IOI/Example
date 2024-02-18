'use client';
 
import { usePathname } from 'next/navigation';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  Cog8ToothIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Employee', href: '/dashboard/employees', icon: UserGroupIcon},
  { name: 'Schedule', href: '/dashboard/schedules', icon: DocumentTextIcon},
  { name: 'Setting', href: '/dashboard/setting', icon: Cog8ToothIcon},
  { name: 'Report', href: '/dashboard/report', icon: ChatBubbleBottomCenterTextIcon},
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href} className={`w-full flex justify-start items-center gap-4 rounded-lg px-3 py-2 transition-all duration-300 ${pathname === link.href ? 'bg-orange-600/90' : 'hover:bg-orange-500/50' }`} >
            <LinkIcon className="w-6" />
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
