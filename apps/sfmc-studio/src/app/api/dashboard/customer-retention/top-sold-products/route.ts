import { getTopSoldProductItems } from "@/controllers/customer-retention/customer-retention";
import { ApiResponses } from "@/lib/helpers/ApiResponses";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();

    const customerRetentionRes = await getTopSoldProductItems(requestBody);

    return NextResponse.json(
      {
        data: customerRetentionRes,
        message:
          "Customer Retention Top Sold Products data fetched succesfully.",
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
