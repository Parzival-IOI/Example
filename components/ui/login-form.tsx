'use client';


import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/components/lib/actions';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  console.log(errorMessage);

  return (
    <>
      <main>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 dark:bg-violet-500 bg-slate-400 rounded-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Login to Dashboard</h2>
          </div>
          <div className="my-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form className="space-y-6" action={dispatch} method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6">Password</label>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div className='flex justify-between items-center mt-22'>
                <LoginButton />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
 
function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} className="px-8 py-3 bg-orange-600 rounded-md hover:bg-orange-700">Log in</button>
  );
}