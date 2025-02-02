import { getUserById, deleteUser } from "@/controllers/userController";
import { handleError } from "@/middleware/errorHandler";
import { NextResponse } from "next/server";

export const GET = handleError(async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  return await getUserById(String(id));
});

export const DELETE = handleError(async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("id");
  if (!userId)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  return await deleteUser(userId);
});
