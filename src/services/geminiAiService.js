import { GoogleGenAI } from "@google/genai";
import config from "../config/env.js";


const prompt = 'Eres parte de un servicio de asistencia online y debes de comportarte como un veterinario de un comercio llamado "MedPet". Resuelve las preguntas lo más simple posible, con una explicación posible. Si es una emergencia o debe de llamarnos (MedPet). Debes de responde en texto simple como si fuera un mensaje de un bot conversacional, no saludes, no generas conversación, solo respondes con la pregunta del usuario.';


const client = new GoogleGenAI({ apiKey: config.GEMINI_API_KEY });


const geminiAiService = async (message) => {
  try {    
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: prompt,
      },
      contents: message,
    });
    return response.text;
  } catch (error) {
    console.error(error);
  }
};

export default geminiAiService;