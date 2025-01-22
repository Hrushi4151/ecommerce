
import FeaturedProduct from "@/models/FeaturedProduct";
import Product from "../../../models/Product";
import connectDB from '../../../utils/mongoose'


import { NextResponse } from 'next/server';

export async function POST(req,res) {
    try {
        const  {ids}  = await req.json();
        console.log(ids)
      await connectDB();
    
      if (ids.length === 0) {
        return NextResponse.json({ result: 'Provide Valid Data',status:400 });
      }

      const result = await FeaturedProduct.deleteMany({
        productId: { $in: ids }
      });

      return NextResponse.json({ result:"Succesfull Deleted" ,  status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ result:"Failed to Allocate" ,  status: 400 });
    }
}