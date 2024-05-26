import { NextRequest, NextResponse } from "next/server";

import db from "@/app/api/db";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const slug = url.pathname.split("/").pop();

  if (!slug) return NextResponse.error();

  const decodedSlug = decodeURIComponent(slug);

  const movie = db.ImdbTop250.findBySlug(decodedSlug);

  return NextResponse.json(movie);
}
