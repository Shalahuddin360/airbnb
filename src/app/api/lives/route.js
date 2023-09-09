import { NextResponse } from 'next/server'
import livePlaces from '../../livePlaces.json'
export async function GET(req){
    return NextResponse.json(livePlaces)
}