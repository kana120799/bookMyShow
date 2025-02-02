import { signup, login } from "@/controllers/authController";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  if (!data.email || !data.password) {
    return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
  }

  if (data.type === "signup") {
    return signup(data);
  } else if (data.type === "login") {
    return login(data);
  }

  return NextResponse.json({ error: "Invalid request type" }, { status: 400 });
}
