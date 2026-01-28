import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(!process.env.REACT_APP_API_KEY) {
        res.status(500).json({error: "Missing API key"})
    }


    res.status(200).json({msg: "Your API Key is: " + process.env.REACT_APP_API_KEY})
}
