import { NextRequest, NextResponse } from "next/server";

import db, { ImdbMovie } from "@/app/api/db";

export type ImdbMovieResponse = ImdbMovie;

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const slug = url.pathname.split("/").pop();

  if (!slug) return NextResponse.error();

  const decodedSlug = decodeURIComponent(slug);

  const movie = db.ImdbTop250.findBySlug(decodedSlug);

  if (!movie) {
    return NextResponse.json({ code: "NOT_FOUND", message: `Movie ${slug} was not found` }, { status: 404 });
  }

  return NextResponse.json(movie);
}
