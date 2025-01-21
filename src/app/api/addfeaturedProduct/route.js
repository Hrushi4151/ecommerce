
import FeaturedProduct from "../../../models/FeaturedProduct";
import Product from "../../../models/Product";
import connectDB from '../../../utils/mongoose'


import { NextResponse } from 'next/server';

export async function POST(req,res) {
    try {
        const  {ids}  = await req.json();
        console.log(ids)
      await connectDB();
          
       
      // Find already featured products
      const existingFeatured = await FeaturedProduct.find({ productId: { $in: ids } });
      const existingFeaturedIds = existingFeatured.map((fp) => fp.productId.toString());

      // Filter out IDs that are already in FeaturedProduct
      const newProductIds = ids.filter((id) => !existingFeaturedIds.includes(id));

      if (newProductIds.length === 0) {
        return NextResponse.json({ result: 'All products are already featured',status:300 });
      }

      // Map new IDs to FeaturedProduct entries
      const featuredProducts = newProductIds.map((id) => ({ productId: id }));

      // Bulk insert new IDs into FeaturedProduct
       await FeaturedProduct.insertMany(featuredProducts);
      return NextResponse.json({ result:"Succesfull Added" ,  status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ result:"Failed to Allocate" ,  status: 400 });
    }
}
