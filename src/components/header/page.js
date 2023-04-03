"use client"
import { useRouter } from "next/navigation";

export default function Header({pageTitle}) {
  const router = useRouter();
//   const pageTitle = router.pathname.replace('/', '');

  return (
    <header className="bg-gray-100 h-20  z-10">
        <h1 className="text-xl font-bold md:pl-80 pt-6 text-[#1E293B]"> {pageTitle} </h1>
        </header>
  );
}