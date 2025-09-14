
import { NextResponse } from 'next/server';
import lighting from '@/data/lighting.json';
import solar from '@/data/solar.json';
import automotive from '@/data/automotive.json';
import automation from '@/data/automation.json';
import powerManagement from '@/data/power-management.json';

const products = {
  ...lighting,
  ...solar,
  ...automotive,
  ...automation,
  ...powerManagement,
};

export async function GET() {
  return NextResponse.json(products);
}
