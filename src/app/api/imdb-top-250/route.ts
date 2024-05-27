import { NextRequest, NextResponse } from "next/server";

import db, { type ImdbMovie } from "@/app/api/db";

export interface ImdbTop250Request {
  q?: string;
}
export type ImdbTop250Response = Array<ImdbMovie>;

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? undefined;

  const data = await db.ImdbTop250.findAll(q);

  return NextResponse.json(data);
}
