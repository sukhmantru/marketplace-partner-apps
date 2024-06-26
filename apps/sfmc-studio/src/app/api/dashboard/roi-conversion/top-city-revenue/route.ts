import { getTopCitiesByRevenue } from "@/controllers/roi-conversion/roi-conversion";
import { ApiResponses } from "@/lib/helpers/ApiResponses";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    requestBody["limit"] = 5;
    const customerConversionCountsRes = await getTopCitiesByRevenue(
      requestBody
    );

    return NextResponse.json(
      {
        data: customerConversionCountsRes,
        message: "ROI/Conversion Top Source Revenue fetched successfully.",
      },
      ApiResponses.SUCCESS
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        error: e?.message,
        message: "Something went wrong!",
      },
      ApiResponses.INTERNAL_SERVER_ERROR
    );
  }
}
