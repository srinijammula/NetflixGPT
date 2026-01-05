import OpenAI from 'openai';
import { OPENAI_API_KEY } from './constants';

export const client = new OpenAI({
  apiKey: OPENAI_API_KEY, 
  dangerouslyAllowBrowser: true,
});

const response = await client.responses.create({
  model: 'gpt-4o',
  instructions: 'You are NetflixGPT, an AI assistant that helps users discover movies. Respond with movie recommendations based on the user search intent. Be concise, friendly, and informative. Only give 5 movies in the response.',
  input: 'Search movies about time travel',
});

console.log(response.output_text);