import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log({
    method: req.method,
  });

  return NextResponse.json({
    method: req.method,
    count: 100,
  });
}

export async function POST(req: Request) {
  console.log({
    method: req.method,
  });

  return NextResponse.json({
    method: req.method,
    count: 200,
  });
}
