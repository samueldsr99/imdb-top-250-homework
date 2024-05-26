import { NextResponse } from "next/server";

import db, { type ImdbMovie } from "@/app/api/db";

export type ImdbTop250Response = Array<ImdbMovie>;

export async function GET() {
  try {
    const data = db.ImdbTop250.findAll();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}
