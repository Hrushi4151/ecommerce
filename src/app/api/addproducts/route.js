import Product from "../../../models/Product";
import dbconnect from '../../../utils/mongoose'

import { NextResponse } from 'next/server';

export async function POST(req,res) {
    try {
        const { product } = await req.json();
        console.log(product)
        await dbconnect()       
             
            const result = await Product.create(product);
        
        return NextResponse.json({ result:"Succesfull inserted" , status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json("database error occured", { status: 400 });
    }
}