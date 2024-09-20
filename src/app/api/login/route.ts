// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Replace with your own user validation logic
  const isValidUser = email === 'user@example.com' && password === 'password';

  if (isValidUser) {
    const token = 'your_auth_token'; // Generate or retrieve a real token
    return NextResponse.json({ token });
  }

  return NextResponse.error();
}
