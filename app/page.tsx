import Link from 'next/link';

export default function Page() {
  return (
    <main className='flex min-h-screen flex-col p-6 justify-center items-center gap-6'>
        <section className='flex justify-center items-center text-4xl w-full my-6'>
          Welcome to Group 1A Interface !
        </section>
        <section className='px-4 py-3 flex justify-center items-center gap-6'>
          <a href="#" className='px-4 py-3 bg-orange-600 rounded-md hover:bg-orange-700'>Download PowerPoint</a>
          <Link href="/login" className="px-8 py-3 bg-orange-600 rounded-md hover:bg-orange-700">
            Login
          </Link>
        </section>
    </main>
  );
}
