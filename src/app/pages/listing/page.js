"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header/page";
import {MdSystemUpdateAlt} from "react-icons/md"
import {AiOutlineDelete} from "react-icons/ai"
import {AiOutlineFolderView} from "react-icons/ai"
function Listing() {
  const router = useRouter();
  const list = [
    {
      blogName: "blog1",
      type: "entertainment",
    },
    {
      blogName: "blog2",
      type: "sports",
    },
    {
      blogName: "blog3",
      type: "politics",
    },
    {
      blogName: "blog4",
      type: "home",
    },
    {
      blogName: "blog5",
      type: "religion",
    },
  ];
  return (
    <>
      <Header pageTitle={"Listing Page"} />
      <div className="py-24 lg:ml-72 md:ml-60  lg:mr-3 md:mr-4">
        <div class="relative overflow-x-auto">
          <button
            type="button"
            onClick={() => router.push("/pages/dashboard")}
            class="py-2.5 px-5 float-right mr-2 mb-2 text-sm font-medium text-white hover:bg-[#1E293B] hover:text-white  focus:outline-none bg-[#1E293B] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Create New
          </button>

          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-full">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Blog Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Type
                </th>
                <th scope="col" class="px-6 py-3">
                  update
                </th>
                <th scope="col" class="px-6 py-3">
                  Delete
                </th>
                <th scope="col" class="px-6 py-3">
                  view
                </th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item) => (
                <>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item?.blogName}
                    </th>
                    <td class="px-6 py-4">{item?.type}</td>
                    <td class="px-6 py-4">
                    <button className=" hover:transform hover:scale-110"> <MdSystemUpdateAlt size={"20px"}/> </button>

                    </td>
                    <td class="px-6 py-4  ">
                     <button className=" hover:transform hover:scale-110">  <AiOutlineDelete size={"20px"}  /> </button> 
                    </td>
                    <td class="px-6 py-4">
                    <button className=" hover:transform hover:scale-110">  <AiOutlineFolderView size={"20px"}  /> </button> 
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Listing;
