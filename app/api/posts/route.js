/** @format */

import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma/prisma";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse(posts, { status: 200 });
  } catch (error) {
    return NextResponse(
      JSON.stringify({ message: `Error: ${error.message}` }, { status: 500 })
    );
  }
};
