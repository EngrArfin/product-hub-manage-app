import { MongoClient, Db, ServerApiVersion } from "mongodb";

let db: Db | null = null;

export const connectDB = async (): Promise<Db> => {
  if (db) return db;

  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
  if (!uri) {
    throw new Error("MongoDB URI  not  environment variables define");
  }

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    db = client.db("Producy-Hub");
    console.log("Database Connect successfully.");
    return db;
  } catch (error) {
    console.error("Failed connect MongoDB:", error);
    throw new Error("Database faild connect");
  }
};
