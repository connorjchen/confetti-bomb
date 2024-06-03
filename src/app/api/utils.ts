import { NextResponse } from "next/server";

// TODO(connor): build in code gen return types so frontend can be typed - use Flyx system
// TODO(connor): toast notifications for errors here? https://www.youtube.com/watch?v=BYXSR-xIRAM&ab_channel=BrianMorrison -- pass in toast object to call?
// TODO(connor): are these already built in? shows on dev but idk about prod??
export async function getFetch(url: string): Promise<any> {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${await response.text()}`);
  }

  return response.json();
}

export async function postFetch(url: string, body: any, jsonify: boolean = true): Promise<any> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonify ? JSON.stringify(body) : body,
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${await response.text()}`);
  }

  return response.json();
}

export async function SuccessResponse(data: any): Promise<NextResponse> {
  return NextResponse.json(data);
}

export async function ErrorResponse(errorMessage: string): Promise<NextResponse> {
  return NextResponse.json({ error: errorMessage }, { status: 400 });
}
