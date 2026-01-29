import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenAI } from "@google/genai";
import { AIResponse } from "@/types/LLMPrompt.d";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(!process.env.REACT_APP_API_KEY) {
        res.status(500).json({error: "Missing API key"})
    }

    const {msg: text} = req.body

    /*
    // FOR DEBUGGING: Use to simulate delayed response from endpoint without using up api calls
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    await sleep(5000)
    */

    
    const ai = new GoogleGenAI({
        apiKey: process.env.REACT_APP_API_KEY
    });

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: text,
    });
    
    res.status(200).json({msg: response.text})
}
