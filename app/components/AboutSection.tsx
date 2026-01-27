import { urlFor } from "@/sanity/lib/image";
import { AboutData } from "@/lib/sanity";
import Image from "next/image";

interface Props {
  data: AboutData | null;
}

export default function AboutSection({ data }: Props) {
  if (!data) return null;

  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {data.image && (
          <div className="w-full md:w-1/2 relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={urlFor(data.image).url()}
              alt={data.title || "About Image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-100">
            {data.title}
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-300">
            {data.description}
          </div>
        </div>
      </div>
    </section>
  );
}
