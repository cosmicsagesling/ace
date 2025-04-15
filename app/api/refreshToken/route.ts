/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Ensure requests come from a trusted source
  const CLIENT_ID:any = process.env.CLIENT_ID;
const CLIENT_SECRET:any = process.env.CLIENT_SECRET;
const REFRESH_TOKEN:any = process.env.REFRESH_TOKEN; // This remains the same
  const authHeader = req.headers.get("Authorization");

  if (authHeader !== `Bearer ${process.env.API_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    // Fetch the new access token from Zoho
    const response = await fetch("https://accounts.zoho.in/oauth/v2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        refresh_token: REFRESH_TOKEN,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });

    const data = await response.json();
    console.log(data.access_token)
    return NextResponse.json({ accessToken: data.access_token });
  } catch (error) {
    return NextResponse.json({ error: "Failed to refresh token" }, { status: 500 });
  }
}
