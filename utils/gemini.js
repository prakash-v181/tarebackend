import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 🔴 OLD (wrong / deprecated)
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

// ✅ NEW (works with v1beta)
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

export const getGeminiResponse = async (messages) => {
  try {
    const prompt = messages
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n");

    const result = await model.generateContent(prompt);
    const text = result.response?.text();

    if (!text) {
      console.log("Gemini empty response:", result);
      return "Sorry, I couldn't generate a reply.";
    }

    return text;
  } catch (err) {
    console.error("Gemini Error:", err);
    return "Sorry, something went wrong with Gemini API.";
  }
};
