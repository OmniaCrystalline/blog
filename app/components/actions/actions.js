/** @format */

"use server";
import { prisma } from "@/utils/prisma/prisma";
import { revalidatePath } from "next/cache";

export const addComment = async (desc, userEmail, postSlug) => {
  try {
    await prisma.comment.create({
      data: {
        desc,
        userEmail,
        postSlug,
      },
    });
    revalidatePath("/[slag]", "page");
    return true;
  } catch (error) {
    throw new Error(error);
  }
};


export const addView = async (id, views) => {
  try {
    await prisma.post.update({
      where: {
        id
      },
      data: {
        views: views + 1
      }
    })
    return true
    
  } catch (error) {
    throw new Error(error);
  }
}