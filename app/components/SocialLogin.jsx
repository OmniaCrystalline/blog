/** @format */
"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";

const SocialLogin = () => {
  const {
    data,
    status,
  } = useSession();
  console.log("data, status", data, status);
  return (
    <div>
      <span className='block text-center p-5'>social auth</span>
      <div className='grid lg:flex w-fit ml-auto mr-auto justify-center gap-4 px-10 py-5 place-items-center'>
        <button className='flex gap-2 justify-center place-items-center px-5 py-2 w-36 bg-transparent border-2 rounded-lg hover:bg-inherit hover:shadow-md '>
          <FaFacebook className='fill-blue-300' />
          <span>FaceBook</span>
        </button>
        <button
          className='flex gap-2 justify-center place-items-center px-5 py-2 w-36 bg-transparent border-2 rounded-lg hover:bg-inherit hover:shadow-md '
          onClick={() => signIn("google")}>
          <FcGoogle />
          <span>Google</span>
        </button>
        <button className='flex gap-2 justify-center place-items-center px-5 py-2 w-36 bg-transparent border-2 rounded-lg hover:bg-inherit hover:shadow-md '>
          <FaGithub />
          <span>Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
