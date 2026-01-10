'use server';

/**
 * @fileOverview An AI chatbot that provides product recommendations and project advice.
 *
 * - productRecommendationChatbot - A function that handles the product recommendation process.
 * - ProductRecommendationChatbotInput - The input type for the productRecommendationChatbot function.
 * - ProductRecommendationChatbotOutput - The return type for the productRecommendationChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationChatbotInputSchema = z.object({
  projectRequirements: z
    .string()
    .describe('The user query about their project, products, or needs.'),
});
export type ProductRecommendationChatbotInput = z.infer<typeof ProductRecommendationChatbotInputSchema>;

const ProductRecommendationChatbotOutputSchema = z.object({
  productRecommendations: z
    .string()
    .describe('The helpful response, advice, or product recommendations based on the user query.'),
});
export type ProductRecommendationChatbotOutput = z.infer<typeof ProductRecommendationChatbotOutputSchema>;

export async function productRecommendationChatbot(
  input: ProductRecommendationChatbotInput
): Promise<ProductRecommendationChatbotOutput> {
  return productRecommendationChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationChatbotPrompt',
  input: {schema: ProductRecommendationChatbotInputSchema},
  output: {schema: ProductRecommendationChatbotOutputSchema},
  prompt: `You are a helpful AI Project Advisor for Weriton Enterprises, a company that sells hardware, construction materials, and offers design and renovation services.

  User's question: {{{projectRequirements}}}

  Please provide helpful advice, product recommendations, or guidance based on the user's question. Be friendly and professional.`,
});

const productRecommendationChatbotFlow = ai.defineFlow(
  {
    name: 'productRecommendationChatbotFlow',
    inputSchema: ProductRecommendationChatbotInputSchema,
    outputSchema: ProductRecommendationChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
