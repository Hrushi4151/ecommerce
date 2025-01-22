import Product from "../../../models/Product";
import dbconnect from '../../../utils/mongoose'

import { NextResponse } from 'next/server';

export async function GET() {

    try {
        await dbconnect();
        
        const products=await Product.find();
        console.log(products)
        if(products){
            return NextResponse.json({products:products, status: 200 }); 
        }else{
            return NextResponse.json({message:"No Products Found", status: 201 }); 
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json("database error occured", { status: 400 });
    }
}