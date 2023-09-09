import { NextResponse } from 'next/server'
import placesData from '../../places.json'
export async function GET(req){
 return NextResponse.json(placesData)
}


