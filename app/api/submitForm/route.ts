import { NextResponse } from "next/server";

const ZOHO_API_URL = "https://www.zohoapis.in/crm/v2/Leads"

async function getAccessToken(): Promise<string | null> {
  try {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/refreshToken`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_SECRET}`,
      },
    });

    const data = await response.json();
    return data.accessToken || null;
  } catch (error) {
    console.error("Error getting access token:", error);
    return null;
  }
}


export async function POST(req: Request) {
  try {
    const formData = await req.json();
    
    
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return NextResponse.json({ error: "Failed to get access token" }, { status: 500 });
    }

    const response = await fetch(ZOHO_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            First_Name: formData.firstName || "",
            MobileCTA: formData.mobcta || "",
            Last_Name:formData.fullName || "n/a",
            Email: formData.email || "",
            Phone: formData.phone || "",
            Interest:formData.programOfInterest || "",
            Country:formData.countryCode || "",
            PrefLearnMode:formData.learningMode || "",
            PrefStartDate:formData.preferredStartDate || "",
            CurrentProfession:formData.currentProfession || "",
            School : formData.school || "",
            College:formData.college || "",
            Desired_Year:formData.d_year || "",
            Desired_Country : formData.studyDestination || "",
            Reference : "from_ace_website",
            ExpLevel : formData.experienceLevel || "",
            AdditionalNotes : formData.message || "",
            RefCode:formData.referralCode || "",
            SystemSource:formData.hearAboutUs || "",
            IsSubscribed:formData.marketingConsent ? 'yes' : 'no' ,
            Native_Language:formData.native_lang || ""
          },
        ],
      }),
    });

    const data = await response.json();
    return NextResponse.json({ message: "Data sent successfully", response: data });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}
