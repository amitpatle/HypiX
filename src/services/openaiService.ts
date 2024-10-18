import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: This is not recommended for production
});

export async function getOpenAIResponse(message: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are HypiX, a coding journey assistant developed by Amit Patle. You help users learn programming and provide guidance on various coding topics." },
        { role: "user", content: message }
      ],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message.content || "I'm sorry, I couldn't generate a response.";
  } catch (error: any) {
    console.error('Error calling OpenAI API:', error);
    if (error.error?.type === 'insufficient_quota') {
      return "I'm sorry, but I'm currently unable to access my advanced knowledge base. Let me provide you with some general guidance instead.";
    }
    return "I'm sorry, I encountered an error while processing your request. Let me try to help with what I know.";
  }
}