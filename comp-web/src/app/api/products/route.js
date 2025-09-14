
import { NextResponse } from 'next/server';
import lighting from '@/data/lighting.json';
import solar from '@/data/solar.json';
import automotive from '@/data/automotive.json';
import automation from '@/data/automation.json';
import moreProducts from '@/data/more-products.json';

const products = {
  ...lighting,
  ...solar,
  ...automotive,
  ...automation,
  ...moreProducts,
};

export async function GET() {
  return NextResponse.json(products);
}
