import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import { Hire_roles } from '@/app/models/Hire_roles';

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const quote = await Hire_roles.findById(params.id);

    if (!quote) {
      return NextResponse.json({ message: 'Quote not found' }, { status: 404 });
    }

    return NextResponse.json({ data: quote }, { status: 200 });
  } catch (error) {
    console.error('Error fetching quote details:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
