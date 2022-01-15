import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    if(req.method == "POST"){

    }
    else{

        res.setHeader("Allow", ['POST'])

        return res.status(405).json({error: `Method ${req.method} not allowed`})
    }
}