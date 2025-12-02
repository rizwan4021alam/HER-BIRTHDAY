import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found. AI features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateBlessing = async (userIntention: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "May your heart find peace and your path be illuminated by love.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `The user has written a spiritual intention for their birthday: "${userIntention}". 
      
      Act as a wise Sufi poet inspired by Rumi. Write a short, personalized blessing (max 30 words) that encourages this specific intention. 
      Use gentle, mystical, and uplifting language. Mention light, the soul, or the heart.`,
    });

    return response.text || "May your light shine bright.";
  } catch (error) {
    console.error("Error generating blessing:", error);
    return "May the universe conspire to bring your beautiful intention to life.";
  }
};