import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { sanityEnv } from "./env";

export const client = createClient({
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
  apiVersion: sanityEnv.apiVersion,
  useCdn: sanityEnv.useCdn,
  token: sanityEnv.token,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: unknown) {
  return builder.image(source);
}