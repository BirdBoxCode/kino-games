import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery } from "next-sanity";

export interface AboutData {
  title: string;
  description: string;
  image: SanityImageSource;
}


export type ImageListData = SanityImageSource[];


const aboutQuery = defineQuery(`*[_type == "about"][0]{
  title,
  description,
  image
}`);

const imageListQuery = defineQuery(`*[_type == "sanity.imageAsset"]`);

export async function getAboutData(): Promise<AboutData | null> {
  try {
    return await client.fetch(aboutQuery);
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
}

export async function getImageListData(): Promise<ImageListData | null> {
  try {
    return await client.fetch(imageListQuery);
  } catch (error) {
    console.error("Error fetching image list data:", error);
    return null;
  }
}
