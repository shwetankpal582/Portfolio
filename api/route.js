export async function GET(req, res) {
  return new Response(JSON.stringify({ message: "Hello World from minimal API!" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
