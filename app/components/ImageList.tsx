import { urlFor } from "@/sanity/lib/image";
import { ImageListData } from "@/lib/sanity";
import Image from "next/image";

interface Props {
  data: ImageListData | null;
}

export default function ImageList({ data }: Props) {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((img, index) => (
            <div key={index} className="relative aspect-video rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
               <Image
                src={urlFor(img).url()}
                alt={`List image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
