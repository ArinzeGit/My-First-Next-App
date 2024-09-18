// app/api/products/route.ts
import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

export async function GET() {
  return NextResponse.json(products);
}
