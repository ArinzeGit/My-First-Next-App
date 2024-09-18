export async function GET() {
    return new Response(JSON.stringify({ message: 'Hello from API route!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  