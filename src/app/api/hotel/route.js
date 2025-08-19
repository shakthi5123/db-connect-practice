import dbConnect from "@/app/lib/mongodb";
import Hotel from "@/app/models/Hotel";

// This is for Next.js App Router API route
export async function GET(request) {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all hotels
    const hotels = await Hotel.find({}); // You can add filters later

    // Return JSON response
    return new Response(JSON.stringify(hotels), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to fetch hotels' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}