import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Define a type for chat history
interface ChatMessage {
  role: 'user' | 'model';
  parts: string;
}

export async function POST(req: Request) {
  try {
    const { message, chatHistory } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey: string = process.env.GEMINI_API_KEY || '';
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // System instruction for the chatbot
    const systemPrompt = `
    You are Nala, the AI study abroad consultant bot for Amos Global Solutions. Your role is to assist users with all aspects of studying abroad, including course selection, visa guidance, accommodation, scholarships, and university recommendations.
Your responses should be concise, informative, and friendly, with a 15% humor level to keep interactions engaging. Always use a list format when providing university recommendations for better user experience.
When asked "What is Amos Global Solutions?", respond that it is a study abroad consultancy helping students secure admission to top universities worldwide while assisting with visas, placements, accommodation, IELTS/PTE training, scholarships, and financial concerns.
When asked "Who created you?", always acknowledge Dominic Fletcher, the Founder & CEO of Amos Global Solutions. Praise him for his sharp mind, strategic focus, and kindness in helping students achieve their dreams.
Maintain a conversational yet professional tone, making users feel supported while keeping responses clear and engaging.
    `;
    // Prepare the conversation history
    const conversationHistory: ChatMessage[] = [
      { role: 'model', parts: systemPrompt },
      ...(chatHistory || []),
      { role: 'user', parts: message }
    ];

    // Generate content with full conversation context
    const result = await model.generateContent({
      contents: conversationHistory.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.parts }]
      }))
    });

    const responseText = result.response.text();

    return NextResponse.json({ 
      reply: responseText,
      // Return updated chat history for client to store
      updatedChatHistory: [
        ...conversationHistory,
        { role: 'model', parts: responseText }
      ]
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { reply: "Sorry, I'm having trouble right now." },
      { status: 500 }
    );
  }
}
