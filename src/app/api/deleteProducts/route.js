
import Topdeals from "@/models/TopDeals";
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

      const result = await Product.deleteMany({
        _id: { $in: ids }
      });
       
      return NextResponse.json({ result:result ,  status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ result:"Failed to Allocate" ,  status: 400 });
    }
}