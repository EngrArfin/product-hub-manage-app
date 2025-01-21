import { connectDB } from "@/src/libs/connectDB";
import { products } from "@/src/libs/product";
import { Collection, Document } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();

  if (!db) {
    return new Response(
      JSON.stringify({ message: "Database connection failed" }),
      {
        status: 500,
      }
    );
  }

  const productsCollection: Collection<Document> = db.collection("products");

  try {
    await productsCollection.deleteMany();
    await productsCollection.insertMany(products);

    return new NextResponse(JSON.stringify({ message: "Sent Successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Error occurred" }), {
      status: 500,
    });
  }
};
