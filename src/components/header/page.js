"use client"
import { useRouter } from "next/navigation";

export default function Header({pageTitle}) {
  const router = useRouter();
//   const pageTitle = router.pathname.replace('/', '');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-800">{pageTitle}</h1>
      </div>
    </header>
  );
}