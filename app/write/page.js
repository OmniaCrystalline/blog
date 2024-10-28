/** @format */
"use client";
import React, { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { RiVideoDownloadLine } from "react-icons/ri";
import { HiDocumentDownload } from "react-icons/hi";
import { LuImagePlus } from "react-icons/lu";
import ReactQuill from "react-quill";
import { useSession } from "next-auth/react";
import "react-quill/dist/quill.bubble.css";
import Link from "next/link";

const page = () => {
  
  const { data, status } = useSession();
  console.log("data, session", data, status);

  return <>{status === "unauthenticated" ? <AuthDemand /> : <BlogSchema />}</>;
};

export default page;

const AuthDemand = () => {
  return (
    <>
      <div className='justify-center flex'>
        You need to be authtorized, <Link className='underline' href='/login'> login or signup</Link>, plz
      </div>
    </>
  );
};


const BlogSchema = () => {
  const [open, setopen] = useState(false);
  const [value, setvalue] = useState("");
  return (
     <div className='py-2'>
          <input
            type='text'
            placeholder='Title'
            className='min-h-36 px-5 py-2 w-full text-4xl placeholder:text-4xl placeholder:place-items-start'></input>
          <button className=' editor-btn mr-12' onClick={() => setopen(!open)}>
            <GoPlusCircle />
          </button>
          {open && (
            <>
              <div className='flex gap-4'>
                <button className=' editor-btn'>
                  <RiVideoDownloadLine />
                </button>{" "}
                <button className=' editor-btn'>
                  <HiDocumentDownload />
                </button>{" "}
                <button className='editor-btn'>
                  <LuImagePlus />
                </button>
              </div>
            </>
          )}
          <ReactQuill
            theme='bubble'
            value={value}
            onChange={setvalue}
            placeholder='write what u whant'></ReactQuill>
        </div>
  )
}