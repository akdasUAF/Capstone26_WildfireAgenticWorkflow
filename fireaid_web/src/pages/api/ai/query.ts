import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(!process.env.API_KEY) {
        res.status(500).json({error: "Missing API key"})
    }

    
    res.status(200).json({msg: "This is an AI response!"})
}
