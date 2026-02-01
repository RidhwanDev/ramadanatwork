import { NextRequest, NextResponse } from "next/server";
import { fetchPrayerTimes } from "@/lib/prayerTimes";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get("city") || "";
  const country = searchParams.get("country") || "United Kingdom";
  const method = parseInt(searchParams.get("method") || "3", 10);

  if (!city.trim()) {
    return NextResponse.json(
      { error: "City is required" },
      { status: 400 }
    );
  }

  const result = await fetchPrayerTimes(city, country, method);

  if ("error" in result) {
    return NextResponse.json(result, { status: 500 });
  }

  return NextResponse.json(result, {
    headers: {
      "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=86400",
    },
  });
}
