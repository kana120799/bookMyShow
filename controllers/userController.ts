import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function getUserById(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { bookings: true, notifications: true },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user, { status: 200 });
}

export async function deleteUser(userId: string) {
  await prisma.user.delete({ where: { id: userId } });
  return NextResponse.json(
    { message: "User deleted successfully" },
    { status: 200 }
  );
}

// Todo :- update user profile

//  export async function updateUserProfile(userId: string, bodyData) {
//   const { name, email, phone } = bodyData;
//   const user = await prisma.user.update({
//     where: { id: userId },
//     data: { name, email, phone },
//   });
//  }
