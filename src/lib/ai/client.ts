import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const chatModel = openai('gpt-4o-mini');  // interview chat
export const smartModel = openai('gpt-4o');       // structured extraction
