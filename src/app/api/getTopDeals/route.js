import Topdeals from '../../../models/TopDeals';
import Product from "../../../models/Product";
import dbconnect from '../../../utils/mongoose'

import { NextResponse } from 'next/server';

export async function GET() {

    try {
        await dbconnect();
        
        const featuredProducts = await TopDeals.find().select('productId');
      
      if (!featuredProducts.length) {
        return NextResponse.json({ error: 'No featured products found' ,status:300});
      }

      const productIds = featuredProducts.map(fp => fp.productId);

      // Step 2: Fetch products from the Product collection based on productIds
      const products = await Product.find({
        _id: { $in: productIds }
      });

      if (!products.length) {
        return  NextResponse.json({ error: 'No products found for the featured products' });
    }
    
    return  NextResponse.json({ result: products, status: 200 });


    } catch (error) {
        console.log(error)
        return NextResponse.json("database error occured", { status: 400 });
    }
}
