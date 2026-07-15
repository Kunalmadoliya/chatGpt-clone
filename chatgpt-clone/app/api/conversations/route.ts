import { NextRequest, NextResponse } from "next/server";
import {
  listConversation,
  createConversation,
  updateConversation,
  deleteConversation,
} from "@/features/conversations/actions/conversation-actions";

export async function GET(req: NextRequest) {
  const result = await listConversation();
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  // Forward the request to the server action which expects a NextRequest
  const result = await createConversation(req);
  return NextResponse.json(result);
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, ...data } = body;

  try {
    const updated = await updateConversation(id, data);
    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error?.message || "Failed to update conversation." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { id } = body;

  const result = await deleteConversation(id);
  return NextResponse.json(result);
}
