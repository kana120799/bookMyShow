import { NextResponse } from "next/server";
type AsyncHandler = (req: Request, ...args: unknown[]) => Promise<NextResponse>;

export const handleError = (fn: AsyncHandler) => {
  return async (request: Request): Promise<NextResponse> => {
    try {
      return await fn(request);
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  };
};

// async (req: Request) => {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");
//   const user = await getUserById(String(id));
//   return NextResponse.json(user);
// }
