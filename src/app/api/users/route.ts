// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const collection = db.collection('users');

    // Example operation: Fetch all users
    const users = await collection.find().limit(10).toArray();

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to connect to MongoDB' }, { status: 500 });
  }
}
