"use client"
import React, { useEffect, useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

   //handling sidebar toggle
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  
  //handling window resize 
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
   
  return (
    <>
    
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        onClick={toggleSidebar}
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
    
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0c scroll-smooth z-40 w-64 h-full transition-transform md:translate-x-0 ${
          isOpen ? '' : '-translate-x-full'
        }`}
        // className="fixed top-0 left-0c scroll-smooth z-40 w-64 h-full transition-transform  -translate-x-full    md:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#1E293B] text-white dark:bg-gray-800 ">
          <a href="https://flowbite.com/" className="flex items-center pl-2.5 mb-10">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Web App Admin Panel
            </span>
          </a>
          <ul className="space-y-2 font-medium ">
            <li>
              <a
                href="/pages/dashboard"
                className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
              >
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/pages/listing"
                className="flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
              >
                <span className="ml-3">Listing</span>
              </a>
            </li>

          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
