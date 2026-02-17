import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

// 1. On crée le client Sanity
export const client = createClient({
  projectId: "l3lfckoz", // 👈 REGARDE BIEN : J'ai mis des guillemets autour !
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// 2. On configure le générateur d'URL
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}