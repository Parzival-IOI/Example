'use client'

import { useState } from 'react'
import NavLinks from './nav-links';

const MobileNav = () => {
    const [isClose, setIsClose] = useState(true);
  return (
    <>
        <div className={`lg:hidden ml-auto mr-4 dark:text-slate-50 text-slate-950 ${isClose ? 'block' : 'hidden'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" onClick={() => setIsClose(!isClose)}>
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </div>
        <div onClick={() => setIsClose(!isClose)} className={`absolute w-full h-full left-0 top-0 z-40 dark:bg-slate-400/20 ${isClose ? 'hidden' : 'block'}`}></div>
        <div className={`lg:hidden bg-slate-950/90 h-[100vh] w-[60vw] flex flex-col justify-start items-center gap-2 py-6 pl-4 pr-16 absolute top-0 z-50 transition-transform duration-700 translate-x-[100vw] ${isClose ? 'translate-x-[100vw]' : 'translate-x-[40vw]'}`}>
            <div className={`dark:text-slate-50 flex justify-end items-center w-full py-6`} onClick={() => setIsClose(!isClose)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
            <NavLinks />
        </div>
    </>
  )
}

export default MobileNav;