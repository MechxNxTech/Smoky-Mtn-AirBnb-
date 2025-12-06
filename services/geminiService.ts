import { GoogleGenAI, Type } from "@google/genai";
import { OptimizationResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const optimizeListing = async (
  propertyType: string,
  location: string,
  features: string
): Promise<OptimizationResult> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const prompt = `
    Act as a top-tier Airbnb Co-Host and SEO Expert specializing in the East Tennessee and Smoky Mountains market (Gatlinburg, Pigeon Forge, Sevierville).
    
    I have a property with the following details:
    - Type: ${propertyType}
    - Location: ${location}
    - Key Features/Notes: ${features}

    Please generate a comprehensive listing optimization package in JSON format containing:
    1. A catchy, high-converting Title (max 50 chars).
    2. A compelling Description intro (approx 100 words) focusing on the "experience".
    3. A Pricing Strategy snippet explaining how to price this for maximum occupancy in the current season.
    4. A list of 5 suggested Amenities that are high-demand in the Smokies but often overlooked.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            pricingStrategy: { type: Type.STRING },
            amenitiesSuggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "description", "pricingStrategy", "amenitiesSuggestions"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as OptimizationResult;
  } catch (error) {
    console.error("Gemini optimization failed:", error);
    // Return fallback data if AI fails or key is missing
    return {
      title: "Cozy Smoky Mountain Getaway",
      description: "Experience the magic of the Smokies in this beautiful property. We specialize in maximizing your revenue through AI-driven pricing and 24/7 guest communication.",
      pricingStrategy: "Dynamic pricing is recommended based on seasonality (Peak: Oct/Nov/Jul).",
      amenitiesSuggestions: ["Hot Tub", "Fast Wi-Fi", "Fire Pit", "Game Room", "EV Charger"]
    };
  }
};