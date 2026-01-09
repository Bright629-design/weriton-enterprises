'use server';

/**
 * @fileOverview An AI chatbot that provides product recommendations based on project requirements.
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
    .describe('The project requirements for which product recommendations are needed.'),
});
export type ProductRecommendationChatbotInput = z.infer<typeof ProductRecommendationChatbotInputSchema>;

const ProductRecommendationChatbotOutputSchema = z.object({
  productRecommendations: z
    .string()
    .describe('The product recommendations based on the project requirements.'),
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
  prompt: `You are a helpful AI chatbot that provides product recommendations based on project requirements.

  Project Requirements: {{{projectRequirements}}}

  Please provide product recommendations based on the project requirements.`,
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
