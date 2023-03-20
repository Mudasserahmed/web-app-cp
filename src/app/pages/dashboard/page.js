"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Page() {
  //initial state values
  const [blogData, setBlogData] = useState({
    title: "",
    quill: "",
    file:""
  });
  //handle data change
  const handleChange = (flag,e)=>{
    console.log(e)
    if(flag == "quill"){
      setBlogData((prev)=>({
        ...prev,
        quill:e
      }))
    }
    else if(flag == "title"){ 
    const {name,value} = e.target 
    setBlogData((pre)=>({
      ...pre,
      [name]:value
    }))
  }
  }
  const handleFileChange = (event) =>{
   console.log(event)
   setBlogData((prev)=>({
    ...prev,
    file:event
   }))
  }
  //handle data submit
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("blog dataa>>>>>",blogData)
  }
  //quill modules
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  return (
    <main className=" bg-[#F1F5F9]  py-24 px-6  lg:px-8">
      <div className="bg-white py-5 mx-4 px-5 md:mx-40 ">
        <div className=" text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Create A Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Create content of the new blog here
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-3 max-w-xl sm:mt-10 "
        >
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="title"
                  value={blogData?.title}
                  onChange={(e) => handleChange("title",e)}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 mb-5">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2.5 mb-14 sm:mb-5">
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  value={blogData?.quill}
                  onChange={(e) => handleChange("quill",e)}
                  style={{ height: "200px", marginBottom: "30px" }}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 mt-14 sm:mt-6">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Upload Image
            </label>
            <div className="mt-2.5">
              <input
                name="file"
                // value={blogData?.file}
                onChange={(e)=>handleFileChange(e.target.files[0])}
                type="file"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              onClick={(e)=>handleSubmit(e)}
              className="block w-full rounded-md bg-[#1E293B] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Page;
