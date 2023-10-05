import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function Test(req: NextApiRequest, res: NextApiResponse){
    try {
        const client = await clientPromise;
        const db = client.db('gerald-elias');

        const newPost = req.body;

        db.collection('Posts Archive').insertOne(newPost).then(res => {
            console.log(res);
        })
    }catch(e){

    }
}