import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

// 1. On crée le client Sanity (UNE SEULE FOIS)
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// 2. On configure le générateur d'URL d'image en utilisant ce client
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}