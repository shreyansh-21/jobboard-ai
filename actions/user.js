"use server";

// import { db } from "@/lib/prisma";
import { db } from "./prisma";
import { auth } from "@clerk/nextjs/server";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const result = await db.$transaction(async (tx) => {
        // find if the industry exists
        
    },{timeout : 10000,});
    return result.user;
    
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw new Error("Failed to update user");
  }


}