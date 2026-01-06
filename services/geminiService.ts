
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a highly experienced technical consultant for Air-Fin Technical Services (AirFinTec).
Your expertise is in Air-Cooled Heat Exchangers (ACHE) and industrial heat transfer.
You answer technical questions about:
1. Finned tube types (L-Foot, G-Base, Extruded, etc.).
2. ACHE maintenance and common failure modes.
3. Spare parts identification.
4. Optimization of heat transfer performance.

Tone: Professional, expert, helpful, and industrial.
Company Background: Founded in 2024 by team with 20+ years experience. Mission: Cost-effective ACHE spares and services.
If asked about services, mention AirFinTec's specialized finned tube replacement and spare parts supply.
`;

export async function askTechnicalAssistant(prompt: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that technical query at the moment. Please contact our human consultants.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Could not connect to the technical knowledge base. Please try again later.";
  }
}
